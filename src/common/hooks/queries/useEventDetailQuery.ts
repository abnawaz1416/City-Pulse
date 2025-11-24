import { useQuery } from '@tanstack/react-query';
import { EventDetails } from '../../types/event.details.types';
import { getEventDetail } from '../../services/api/events.api';

export const useEventDetailQuery = (id: string) => {
  return useQuery<EventDetails>({
    queryKey: ['eventDetail', id],
    queryFn: () => getEventDetail(id),
  });
};
