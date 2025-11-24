import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import LocalizedText from '../../components/common/LocalizedText';
import { useEventDetailQuery } from '../../common/hooks/queries/useEventDetailQuery';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import EmptyState from '../../components/common/EmptyState';
import EventFavorite from '../../components/detail/EventFavorite';
import EventDateTimeCard from '../../components/detail/EventDateTimeCard';
import VenueCard from '../../components/detail/VenueCard';
import MapPreviewCard from '../../components/detail/MapPreviewCard';
import ClassificationCard from '../../components/detail/ClassificationCard';
import DescriptionCard from '../../components/detail/DescriptionCard';

const EventDetailScreen = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const {
    data: eventDetail,
    isLoading,
    error,
    refetch,
  } = useEventDetailQuery(id);

  const handleGetTickets = () => {
    if (eventDetail?._embedded?.venues?.[0]?.url) {
      Linking.openURL(eventDetail._embedded.venues[0].url);
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState refetch={() => refetch()} error={error.message} />;
  }

  if (!eventDetail) {
    return <EmptyState />;
  }

  const venues = eventDetail._embedded?.venues || [];
  const venue = venues[0];
  const dateTime = eventDetail.dates?.start?.dateTime;
  const startDate = eventDetail.dates?.start?.localDate;
  const startTime = eventDetail.dates?.start?.localTime;
  const attraction = eventDetail._embedded?.attractions?.[0];
  const classification = attraction?.classifications?.[0];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imagePlaceholder}
          source={{
            uri: eventDetail.images[0].url,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.eventName}>{eventDetail.name}</Text>
          <EventFavorite eventId={eventDetail.id} />
        </View>

        {(dateTime || startDate || startTime) && (
          <EventDateTimeCard
            dateTime={dateTime}
            startDate={startDate}
            startTime={startTime}
          />
        )}

        {venue && <VenueCard venue={venue} />}

        {venue && venue.location && <MapPreviewCard venue={venue} />}

        {classification && (
          <ClassificationCard classification={classification} />
        )}

        {eventDetail.pleaseNote && (
          <DescriptionCard description={eventDetail.pleaseNote} />
        )}

        {venue?.url && (
          <TouchableOpacity
            style={styles.ticketButton}
            onPress={handleGetTickets}
            activeOpacity={0.8}
          >
            <Text style={styles.ticketButtonIcon}>🎫</Text>

            <LocalizedText
              i18nKey="eventDetail.getTickets"
              style={styles.ticketButtonText}
            />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    height: 280,
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 64,
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  eventName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 36,
    flex: 1,
    marginEnd: 12,
    textAlign: 'left',
  },
  ticketButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ticketButtonIcon: {
    fontSize: 20,
    marginEnd: 8,
  },
  ticketButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
