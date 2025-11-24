import { api } from '../../config/api.config';
import { EventDetails } from '../../types/event.details.types';
import { EventsResponse, Event } from '../../types/event.types';

const PAGE_SIZE = 20;

export const getEvents = async (
  page: number = 0,
  keyword?: string,
  city?: string,
  favoritesIds?: string[],
): Promise<EventsResponse> => {
  const id = favoritesIds?.join(',') ?? undefined;
  try {
    const response = await api.get('events.json', {
      params: {
        size: PAGE_SIZE.toString(),
        page: page.toString(),
        keyword,
        city,
        id,
      },
    });
    return {
      events: (response.data._embedded?.events as Event[]) ?? [],
      totalPages: (response.data.page?.totalPages as number) ?? 0,
    } as EventsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEventDetail = async (id: string): Promise<EventDetails> => {
  try {
    const response = await api.get(`events/${id}.json`);
    return response.data as EventDetails;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
