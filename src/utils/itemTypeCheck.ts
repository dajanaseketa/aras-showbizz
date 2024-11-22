import dayjs from "dayjs";
import { Item, MediaType, Movie, Person, Tv } from "../api/types";

export function isMovie(item: Item): item is Movie {
  return item.media_type === MediaType.Movie;
}

export function isTv(item: Item): item is Tv {
  return item.media_type === MediaType.Tv;
}

export function isPerson(item: Item): item is Person {
  return item.media_type === MediaType.Person;
}

export function mapItemsToCards(items: (Movie | Tv | Person)[]) {
  return items.map((item) => {
    switch (true) {
      case isMovie(item):
        return {
          href: `/movie/${item.id}`,
          imageUrl: item.poster_path,
          title: item.title,
          description: dayjs(item.release_date).format("D MMM: YYYY"),
          rating: `${item.popularity}%`,
        };
      case isTv(item):
        return {
          href: `/tv/${item.id}`,
          imageUrl: item.poster_path,
          title: item.name,
          description: dayjs(item.first_air_date).format("D MMM: YYYY"),
          rating: `${item.popularity}%`,
        };
      case isPerson(item):
        return {
          href: `/person/${item.id}`,
          imageUrl: item.profile_path,
          title: item.name,
        };
      default:
        return {
          href: "/",
          title: "",
          imageUrl: "",
        };
    }
  });
}
