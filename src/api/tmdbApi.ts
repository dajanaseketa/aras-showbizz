import { queryOptions } from "@tanstack/react-query";
import {
  MediaItem,
  Movie,
  MovieCredits,
  MovieKeywords,
  Person,
  PersonCredits,
  TvShow,
} from "./types";

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
  return fetcher<MediaItem[]>(`/trending/all/${time}`);
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

async function getPopularTvShows() {
  return fetcher<TvShow[]>("/tv/popular");
}

export const popularTvShowsOptions = queryOptions({
  queryKey: ["popular", "tv"],
  queryFn: async () => await getPopularTvShows(),
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
  return fetcher<MediaItem[]>(`/search/multi?query=${searchQuery}`, true);
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

// Person Credits

async function getPersonCredits(id: string) {
  return fetcher<PersonCredits>(`/person/${id}/combined_credits`);
}

export function getPersonCreditsOptions(id: string) {
  return queryOptions({
    queryKey: ["person-credits", id],
    queryFn: async () => await getPersonCredits(id),
  });
}

// Movie Details

async function getMovieDetails(id: string) {
  return fetcher<Movie>(`/movie/${id}`);
}

export function getMovieDetailsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie", id],
    queryFn: async () => await getMovieDetails(id),
  });
}

// Movie Recommendations

async function getMovieRecommendations(id: string) {
  return fetcher<Movie[]>(`/movie/${id}/recommendations`);
}

export function getMovieRecommendationsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-recommendations", id],
    queryFn: async () => await getMovieRecommendations(id),
  });
}

// Movie Credits

async function getMovieCredits(id: string) {
  return fetcher<MovieCredits>(`/movie/${id}/credits`);
}

export function getMovieCreditsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-credits", id],
    queryFn: async () => await getMovieCredits(id),
  });
}

// Movie Keywords

async function getMovieKeywords(id: string) {
  return fetcher<MovieKeywords>(`/movie/${id}/keywords`);
}

export function getMovieKeywordsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-keywords", id],
    queryFn: async () => await getMovieKeywords(id),
  });
}
