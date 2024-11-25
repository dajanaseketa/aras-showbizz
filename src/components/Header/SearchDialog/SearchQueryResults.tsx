import {
  getSearchResults,
  popularMoviesOptions,
  popularPeopleOptions,
  popularTvShowsOptions,
} from "@/api/tmdbApi";
import { LargeCardsContainer, SmallCardsContainer } from "@/components";
import { Divider, FlexLayout, Text } from "@/ui/components";
import {
  isMovie,
  isPerson,
  isTvShow,
  mapMediaItemsToItems,
  mapMovieToItem,
  mapPersonToItem,
  mapTvShowToItem,
} from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import isEmpty from "lodash/isEmpty";

interface SearchQueryResultsProps {
  searchQuery: string;
}

export const SearchQueryResults: React.FC<SearchQueryResultsProps> = ({
  searchQuery,
}) => {
  const { data: searchResults } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: async () => await getSearchResults(searchQuery),
  });

  const { data: popularMovies } = useQuery(popularMoviesOptions);
  const { data: popularTvShows } = useQuery(popularTvShowsOptions);
  const { data: popularPeople } = useQuery(popularPeopleOptions);

  const movieResults = isEmpty(searchQuery)
    ? popularMovies
    : searchResults?.filter(isMovie);
  const tvShowResults = isEmpty(searchQuery)
    ? popularTvShows
    : searchResults?.filter(isTvShow);
  const peopleResults = isEmpty(searchQuery)
    ? popularPeople
    : searchResults?.filter(isPerson);

  const movies = movieResults?.map(mapMovieToItem);
  const tvShows = tvShowResults?.map(mapTvShowToItem);
  const people = peopleResults?.map(mapPersonToItem);

  if (isEmpty(people) && isEmpty(movies) && isEmpty(tvShows)) {
    return (
      <Text variant="paragraph-l" className="pt-4xl text-center">
        No results for `{searchQuery}`. <br /> Try typing something else.
      </Text>
    );
  }

  return (
    <FlexLayout className="flex-col gap-m">
      {!!people && !isEmpty(people) && (
        <>
          <Divider variant="horizontal" />
          <SmallCardsContainer cards={people} title="Top searched people" />
        </>
      )}
      {!!movies && !isEmpty(movies) && (
        <>
          <Divider variant="horizontal" />
          <LargeCardsContainer
            titleVariant="h5"
            title="Top searched movies"
            cards={movies}
          />
        </>
      )}
      {!!tvShows && !isEmpty(tvShows) && (
        <>
          <Divider variant="horizontal" />
          <LargeCardsContainer
            titleVariant="h5"
            title="Top searched TV Shows"
            cards={tvShows}
          />
        </>
      )}
    </FlexLayout>
  );
};
