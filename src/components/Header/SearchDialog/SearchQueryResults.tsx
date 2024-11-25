import { getSearchResults } from "@/api/tmdbApi";
import { LargeCardsContainer, SmallCardsContainer } from "@/components";
import { Divider, FlexLayout, Text } from "@/ui/components";
import {
  isMovie,
  isPerson,
  isTvShow,
  mapMediaItemsToItems,
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

  const movieResults = searchResults?.filter(isMovie);
  const tvShowResults = searchResults?.filter(isTvShow);
  const peopleResults = searchResults?.filter(isPerson);

  if (
    isEmpty(peopleResults) &&
    isEmpty(movieResults) &&
    isEmpty(tvShowResults)
  ) {
    return (
      <Text variant="paragraph-l" className="pt-4xl text-center">
        No results for `{searchQuery}`. <br /> Try typing something else.
      </Text>
    );
  }

  return (
    <FlexLayout className="flex-col gap-m">
      {peopleResults && !isEmpty(peopleResults) && (
        <>
          <Divider variant="horizontal" />
          <SmallCardsContainer
            cards={mapMediaItemsToItems(peopleResults)}
            title="Top searched people"
          />
        </>
      )}
      {movieResults && !isEmpty(movieResults) && (
        <>
          <Divider variant="horizontal" />
          <LargeCardsContainer
            titleVariant="h5"
            title="Top searched movies"
            cards={mapMediaItemsToItems(movieResults)}
          />
        </>
      )}
      {tvShowResults && !isEmpty(tvShowResults) && (
        <>
          <Divider variant="horizontal" />
          <LargeCardsContainer
            titleVariant="h5"
            title="Top searched TV Shows"
            cards={mapMediaItemsToItems(tvShowResults)}
          />
        </>
      )}
    </FlexLayout>
  );
};
