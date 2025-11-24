import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { useEventsQuery } from '../../common/hooks/queries/useEventsQuery';
import EventItem from './EventItem';
import { Event } from '../../common/types/event.types';
import LoadingState from '../common/LoadingState';
import ErrorState from '../common/ErrorState';
import EmptyState from '../common/EmptyState';

interface EventListProps {
  onEventPress: (event: Event) => void;
  keyword?: string;
  city?: string;
  favoritesIds?: string[];
}

const EventList = ({
  onEventPress,
  keyword,
  city,
  favoritesIds,
}: EventListProps) => {
  const {
    events,
    isLoading,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useEventsQuery({
    keyword,
    city,
    favoritesIds,
  });

  const footerComponent = useMemo(() => {
    return isFetchingNextPage ? (
      <View style={styles.footerContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  }, [isFetchingNextPage]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState refetch={() => refetch()} error={error.message} />;
  }

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <EventItem event={item} onEventPress={onEventPress} />
      )}
      ListEmptyComponent={<EmptyState />}
      keyExtractor={item => item.id}
      contentContainerStyle={
        events.length === 0 ? styles.emptyListContent : styles.listContent
      }
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={footerComponent}
    />
  );
};

export default EventList;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContent: {
    padding: 16,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
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
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
