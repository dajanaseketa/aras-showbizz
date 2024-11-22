export enum MediaType {
  Movie = "movie",
  Tv = "tv",
  Person = "person",
}

export type Movie = {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  media_type: MediaType;
};

export type Tv = {
  id: string;
  name: string;
  first_air_date: string;
  poster_path: string;
  popularity: number;
  media_type: MediaType;
};

export type Person = {
  id: string;
  name: string;
  profile_path: string;
  popularity: number;
  media_type: MediaType;
  known_for_department: string;
  known_for: Movie[];
  biography: string;
  birthday: string;
  place_of_birth: string;
};

export type Item = Movie | Tv | Person;
