import { queryOptions } from "@tanstack/react-query";
import { Item, Movie, Person, Tv } from "./types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetcher = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Data fetching failed.");

  const data = await res.json();
  return data.results;
};

async function getTrendingAll(time: "day" | "week") {
  return fetcher<Item[]>(`/trending/all/${time}`);
}

export const trendingAllDayOptions = queryOptions({
  queryKey: ["trending", "day"],
  queryFn: async () => await getTrendingAll("day"),
});

export const trendingAllWeekOptions = queryOptions({
  queryKey: ["trending", "week"],
  queryFn: async () => await getTrendingAll("week"),
});

async function getUpcomingMovies() {
  return fetcher<Movie[]>(`/movie/upcoming`);
}

export const upcomingMoviesOptions = queryOptions({
  queryKey: ["upcoming"],
  queryFn: async () => await getUpcomingMovies(),
});

async function getPopularMovies() {
  return fetcher<Movie[]>(`/movie/popular`);
}

export const popularMoviesOptions = queryOptions({
  queryKey: ["popular", "movies"],
  queryFn: async () => await getPopularMovies(),
});

async function getPopularTv() {
  return fetcher<Tv[]>(`/tv/popular`);
}

export const popularTvOptions = queryOptions({
  queryKey: ["popular", "tv"],
  queryFn: async () => await getPopularTv(),
});

async function getPopularPeople() {
  return fetcher<Person[]>(`/person/popular`);
}

export const popularPeopleOptions = queryOptions({
  queryKey: ["popular", "people"],
  queryFn: async () => await getPopularPeople(),
});
