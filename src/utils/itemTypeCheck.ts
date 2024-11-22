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
          description: item.release_date,
          rating: `${item.popularity}%`,
        };
      case isTv(item):
        return {
          href: `/tv/${item.id}`,
          imageUrl: item.poster_path,
          title: item.name,
          description: item.first_air_date,
          rating: `${item.popularity}%`,
        };
      case isPerson(item):
        return {
          href: `/person/${item.id}`,
          imageUrl: item.profile_path,
          title: item.name,
        };
    }
  });
}
