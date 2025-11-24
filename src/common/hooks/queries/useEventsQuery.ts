import { useInfiniteQuery } from '@tanstack/react-query';
import { getEvents } from '../../services/api/events.api';
import { EventsResponse } from '../../types/event.types';

export const useEventsQuery = (params: {
  page?: number;
  keyword?: string;
  city?: string;
  favoritesIds?: string[];
}) => {
  const {
    data,
    isLoading,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<EventsResponse>({
    queryKey: ['events', params],
    queryFn: ({ pageParam }) =>
      getEvents(
        pageParam as number,
        params.keyword,
        params.city,
        params.favoritesIds,
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length - 1;
      const hasMore = currentPage + 1 < lastPage.totalPages;
      return hasMore ? currentPage + 1 : undefined;
    },
  });

  const events = data?.pages.flatMap(page => page.events) ?? [];

  return {
    events,
    isLoading,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
