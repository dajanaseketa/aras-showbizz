export enum MediaType {
  Movie = "movie",
  TvShow = "tv",
  Person = "person",
}

type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  media_type: MediaType;
  genres: Genre[];
  overview: string;
  status: string;
  type: string;
  original_language: string;
  production_companies: ProductionCompany[];
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Credits = {
  id: number;
  cast: CastMember[];
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};

export type Keywords = {
  id: number;
  keywords: { id: number; name: string }[];
};

export type Images = {
  id: number;
  posters: Image[];
  logos: Image[];
  backdrops: Image[];
};

export type Image = {
  file_path: string;
  height: number;
  width: number;
};

export type TvShow = {
  id: number;
  name: string;
  first_air_date: string;
  poster_path: string;
  vote_average: number;
  media_type: MediaType;
  genres: Genre[];
  overview: string;
  status: string;
  original_language: string;
  production_companies: ProductionCompany[];
};

export type Person = {
  id: number;
  name: string;
  profile_path: string;
  media_type: MediaType;
  known_for_department: string;
  known_for: Movie[];
  biography: string;
  birthday: string;
  place_of_birth: string;
};

export type PersonCredits = {
  id: number;
  cast: Movie[];
};

export type MediaItem = Movie | TvShow | Person;
