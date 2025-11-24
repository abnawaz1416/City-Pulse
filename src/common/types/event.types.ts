export interface Event {
  name: string;
  id: string;
  images: EventImage[];
  dates: EventDates;
  _embedded?: {
    venues?: Venue[];
  };
}

export interface EventImage {
  url: string;
}

export interface EventDates {
  start: {
    localDate: string;
    localTime: string;
    dateTime: string;
  };
}

export interface Venue {
  name: string;
  city: {
    name: string;
  };
  state?: {
    name: string;
  };
  country: {
    name: string;
  };
}

export interface EventsResponse {
  events: Event[];
  totalPages: number;
}
