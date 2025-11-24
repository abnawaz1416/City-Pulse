export interface EventDetails {
  _embedded: Embedded;
  dates: Dates;
  id: string;
  images: Image2[];
  name: string;
  pleaseNote: string;
  priceRanges: PriceRange[];
}

export interface Embedded {
  venues: Venue[];
  attractions: Attraction[];
}

export interface Venue {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  postalCode: string;
  timezone: string;
  city: City;
  state: State;
  country: Country;
  address: Address;
  location: Location;
}

export interface City {
  name: string;
}

export interface State {
  name: string;
  stateCode: string;
}

export interface Country {
  name: string;
  countryCode: string;
}

export interface Address {
  line1: string;
}

export interface Location {
  longitude: string;
  latitude: string;
}

export interface Attraction {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  classifications: Classification[];
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface Classification {
  primary: boolean;
  segment: Segment;
  genre: Genre;
  subGenre: SubGenre;
}

export interface Segment {
  id: string;
  name: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface SubGenre {
  id: string;
  name: string;
}

export interface Dates {
  start: Start;
}

export interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
}

export interface Image2 {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface PriceRange {
  type: string;
  currency: string;
  min: number;
  max: number;
}
