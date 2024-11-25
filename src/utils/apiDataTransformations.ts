import dayjs from "dayjs";
import { MediaItem, MediaType, Movie, Person, TvShow } from "../api/types";

export function getAbsoluteImageUrl(relativeUrl: string, imageSize?: string) {
  if (!relativeUrl) {
    return "/images/movie-image-placeholder.png";
  }
  const baseUrl = "https://image.tmdb.org/t/p/";
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

export function mapItemsToCards(items: (Movie | TvShow | Person)[]) {
  return items.map((item) => {
    switch (true) {
      case isMovie(item):
        return mapMovieToCard(item);
      case isTvShow(item):
        return mapTvShowToCard(item);
      case isPerson(item):
        return mapPersonToCard(item);
      default:
        return {
          href: "/",
          title: "",
          imageUrl: "",
        };
    }
  });
}

export function mapMovieToCard(movie: Movie) {
  return {
    href: `/movie/${movie.id}`,
    imageUrl: movie.poster_path,
    title: movie.title,
    description: dayjs(movie.release_date).format("D MMM: YYYY"),
    rating: `${getRatingPercentage(movie.vote_average)}%`,
  };
}

export function mapTvShowToCard(tvShow: TvShow) {
  return {
    href: `/tv/${tvShow.id}`,
    imageUrl: tvShow.poster_path,
    title: tvShow.name,
    description: dayjs(tvShow.first_air_date).format("D MMM: YYYY"),
    rating: `${getRatingPercentage(tvShow.vote_average)}%`,
  };
}

export function mapPersonToCard(person: Person) {
  return {
    href: `/person/${person.id}`,
    imageUrl: person.profile_path,
    title: person.name,
  };
}
