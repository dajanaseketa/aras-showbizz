import { queryOptions } from "@tanstack/react-query";
import {
  MediaItem,
  Movie,
  Credits,
  Images,
  Keywords,
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
  return fetcher<Credits>(`/movie/${id}/credits`);
}

export function getMovieCreditsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-credits", id],
    queryFn: async () => await getMovieCredits(id),
  });
}

// Movie Keywords

async function getMovieKeywords(id: string) {
  return fetcher<Keywords>(`/movie/${id}/keywords`);
}

export function getMovieKeywordsOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-keywords", id],
    queryFn: async () => await getMovieKeywords(id),
  });
}

// Movie Images

async function getMovieImages(id: string) {
  return fetcher<Images>(`/movie/${id}/images`);
}

export function getMovieImagesOptions(id: string) {
  return queryOptions({
    queryKey: ["movie-images", id],
    queryFn: async () => await getMovieImages(id),
  });
}

// Tv Show Details

async function getTvShowDetails(id: string) {
  return fetcher<TvShow>(`/tv/${id}`);
}

export function getTvShowDetailsOptions(id: string) {
  return queryOptions({
    queryKey: ["tv", id],
    queryFn: async () => await getTvShowDetails(id),
  });
}

// Tv Show Recommendations

async function getTvShowRecommendations(id: string) {
  return fetcher<TvShow[]>(`/tv/${id}/recommendations`);
}

export function getTvShowRecommendationsOptions(id: string) {
  return queryOptions({
    queryKey: ["tv-recommendations", id],
    queryFn: async () => await getTvShowRecommendations(id),
  });
}

// Tv Show Credits

async function getTvShowCredits(id: string) {
  return fetcher<Credits>(`/tv/${id}/credits`);
}

export function getTvShowCreditsOptions(id: string) {
  return queryOptions({
    queryKey: ["tv-credits", id],
    queryFn: async () => await getTvShowCredits(id),
  });
}

// Tv Show Keywords

async function getTvShowKeywords(id: string) {
  return fetcher<Keywords>(`/tv/${id}/keywords`);
}

export function getTvShowKeywordsOptions(id: string) {
  return queryOptions({
    queryKey: ["tv-keywords", id],
    queryFn: async () => await getTvShowKeywords(id),
  });
}

// Tv Show Images

async function getTvShowImages(id: string) {
  return fetcher<Images>(`/tv/${id}/images`);
}

export function getTvShowImagesOptions(id: string) {
  return queryOptions({
    queryKey: ["tv-images", id],
    queryFn: async () => await getTvShowImages(id),
  });
}
