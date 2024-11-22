import { queryOptions } from "@tanstack/react-query";
import { Item, Movie, Person, Tv } from "./types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetcher = async <T>(
  endpoint: string,
  hasParams?: boolean
): Promise<T> => {
  const url = `${BASE_URL}${endpoint}${
    hasParams ? "&" : "?"
  }api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Data fetching failed.");
  }

  const data = await res.json();

  if (data.results) {
    return data.results;
  } else {
    return data;
  }
};

// Trending

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

// Upcoming

async function getUpcomingMovies() {
  return fetcher<Movie[]>("/movie/upcoming");
}

export const upcomingMoviesOptions = queryOptions({
  queryKey: ["upcoming"],
  queryFn: async () => await getUpcomingMovies(),
});

// Popular

async function getPopularMovies() {
  return fetcher<Movie[]>("/movie/popular");
}

export const popularMoviesOptions = queryOptions({
  queryKey: ["popular", "movies"],
  queryFn: async () => await getPopularMovies(),
});

async function getPopularTv() {
  return fetcher<Tv[]>("/tv/popular");
}

export const popularTvOptions = queryOptions({
  queryKey: ["popular", "tv"],
  queryFn: async () => await getPopularTv(),
});

async function getPopularPeople() {
  return fetcher<Person[]>("/person/popular");
}

export const popularPeopleOptions = queryOptions({
  queryKey: ["popular", "people"],
  queryFn: async () => await getPopularPeople(),
});

// Search

export async function getSearchResults(searchQuery: string) {
  return fetcher<Item[]>(`/search/multi?query=${searchQuery}`, true);
}

// Person Details

async function getPersonDetails(id: string) {
  return fetcher<Person>(`/person/${id}`);
}

export function getPersonDetailsOptions(id: string) {
  return queryOptions({
    queryKey: ["person", id],
    queryFn: async () => await getPersonDetails(id),
  });
}
