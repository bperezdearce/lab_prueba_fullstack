export interface ISet {
  id: string;
  name: string;
  series: string;
  printed_total: number;
  total: number;
  ptcgo_code: string;
  release_date: string;
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
}
