export interface ISet {
  id: string;
  name: string;
  series: string;
  printed_total: number;
  total: number;
  ptcgo_code: string;
  release_date: string;
  updated_at: string;
  symbol_url: string;
  logo_url: string;
}

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  types: string[];
  set_id: string;
  number: string;
  rarity: string;
  images: IImage[];
  markets: IMarket[];
}

export interface IImage {
  id: number;
  card_id: string;
  url: string;
  type: string;
}

export interface IMarket {
  id: number;
  card_id: string;
  url: string;
  updated_at: string;
  market: string;
}

export interface IFiltersState {
  setId: string;
  name?: string;
  rarity?: string;
  type?: string;
  page: number;
  limit: number;
}

export interface IFiltersProps {
  onFilter: (filters: IFiltersState) => void;
}

export interface IApiResponse {
  data: ICard[];
  total: number;
  page: number;
  limit: number;
}