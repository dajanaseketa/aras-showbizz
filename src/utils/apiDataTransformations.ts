import dayjs from "dayjs";
import { MediaItem, MediaType, Movie, Person, TvShow } from "../api/types";

export function getAbsoluteImageUrl(relativeUrl: string, imageSize?: string) {
  if (!relativeUrl) {
    return "/images/movie-image-placeholder.png";
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL;
  const size = imageSize ?? "w500";

  return `${baseUrl}${size}${relativeUrl}`;
}

export function getRatingPercentage(rating: number) {
  return Math.round(rating * 10);
}

export function isMovie(item: MediaItem): item is Movie {
  return item.media_type === MediaType.Movie;
}

export function isTvShow(item: MediaItem): item is TvShow {
  return item.media_type === MediaType.TvShow;
}

export function isPerson(item: MediaItem): item is Person {
  return item.media_type === MediaType.Person;
}

export function mapMediaItemsToItems(items?: (Movie | TvShow | Person)[]) {
  if (!items) {
    return [];
  }

  return items.map((item) => {
    switch (true) {
      case isMovie(item):
        return mapMovieToItem(item);
      case isTvShow(item):
        return mapTvShowToItem(item);
      case isPerson(item):
        return mapPersonToItem(item);
      default:
        return {
          href: "/",
          title: "",
          imageUrl: "",
        };
    }
  });
}

export function mapMovieToItem(movie: Movie): Item {
  return {
    href: `/movie/${movie.id}`,
    imageUrl: movie.poster_path,
    title: movie.title,
    description: dayjs(movie.release_date).format("D MMM: YYYY"),
    releaseDate: movie.release_date,
    rating: `${getRatingPercentage(movie.vote_average)}%`,
    genres: movie.genres?.map((genre) => genre.name).join(", "),
    overview: movie.overview,
  };
}

export function mapTvShowToItem(tvShow: TvShow): Item {
  return {
    href: `/tv/${tvShow.id}`,
    imageUrl: tvShow.poster_path,
    title: tvShow.name,
    description: dayjs(tvShow.first_air_date).format("D MMM: YYYY"),
    releaseDate: tvShow.first_air_date,
    rating: `${getRatingPercentage(tvShow.vote_average)}%`,
    genres: tvShow.genres?.map((genre) => genre.name).join(", "),
    overview: tvShow.overview,
  };
}

export function mapPersonToItem(person: Person): Item {
  return {
    href: `/person/${person.id}`,
    imageUrl: person.profile_path,
    title: person.name,
  };
}

export type Item = {
  href: string;
  imageUrl: string;
  title: string;
  releaseDate?: string;
  description?: string;
  rating?: string;
  genres?: string;
  overview?: string;
};
