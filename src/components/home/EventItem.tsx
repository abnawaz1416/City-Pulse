import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Event } from '../../common/types/event.types';
import FastImage from '@d11/react-native-fast-image';
import { formatDateTime } from '../../common/utils/util';
import { Octicons } from '@react-native-vector-icons/octicons';

interface EventItemProps {
  event: Event;
  onEventPress: (event: Event) => void;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
}

const EventItem = ({
  event,
  onEventPress,
  isFavorite,
  onFavoritePress,
}: EventItemProps) => {
  const venue = event._embedded?.venues?.[0];
  const imageUrl = event.images[0].url;
  return (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => onEventPress(event)}
    >
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imagePlaceholder}
          source={{
            uri: imageUrl,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        {isFavorite && (
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={onFavoritePress}
            activeOpacity={0.7}
          >
            <Octicons name="heart-fill" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.eventInfo}>
        <Text style={styles.eventName} numberOfLines={2}>
          {event.name}
        </Text>
        {venue && (
          <View>
            <Text
              style={styles.eventVenue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {venue.name}, {venue.city.name}
            </Text>
            <Text
              style={styles.eventVenue}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {venue.country.name}
            </Text>
          </View>
        )}
        {event.dates?.start?.dateTime && (
          <View style={styles.dateTimeContainer}>
            <Text style={styles.eventDate}>
              {formatDateTime(event.dates.start.dateTime, 'MMM d, yyyy')}
            </Text>
            <Text style={styles.eventTime}>
              {formatDateTime(event.dates.start.dateTime, 'h:mm a')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageText: {
    fontSize: 48,
  },
  eventInfo: {
    padding: 16,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a1a1a',
    lineHeight: 24,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  eventDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#007AFF',
    letterSpacing: 0.3,
    marginEnd: 8,
  },
  eventTime: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
    letterSpacing: 0.2,
  },
  eventVenue: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    marginBottom: 4,
  },
  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
