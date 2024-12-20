"use client";

import {
  popularMoviesOptions,
  popularPeopleOptions,
  popularTvShowsOptions,
} from "@/api/tmdbApi";
import { MediaType } from "@/api/types";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import {
  mapMovieToItem,
  mapPersonToItem,
  mapTvShowToItem,
} from "@/utils/apiDataTransformations";

import { useQuery } from "@tanstack/react-query";
import isEmpty from "lodash/isEmpty";
import { useMemo, useState } from "react";

export const PopularContainer: React.FC = () => {
  const { data: popularMovies } = useQuery(popularMoviesOptions);
  const { data: popularTvShows } = useQuery(popularTvShowsOptions);
  const { data: popularPeople } = useQuery(popularPeopleOptions);

  const [type, setType] = useState<MediaType>(MediaType.Movie);

  const tabs = [
    {
      label: "Movies",
      isSelected: type === MediaType.Movie,
      onClick: () => setType(MediaType.Movie),
    },
    {
      label: "On TV",
      isSelected: type === MediaType.TvShow,
      onClick: () => setType(MediaType.TvShow),
    },
    {
      label: "People",
      isSelected: type === MediaType.Person,
      onClick: () => setType(MediaType.Person),
    },
  ];

  const cards = useMemo(() => {
    if (type === MediaType.Movie) {
      return popularMovies?.map(mapMovieToItem);
    } else if (type === MediaType.TvShow) {
      return popularTvShows?.map(mapTvShowToItem);
    } else if (type === MediaType.Person) {
      return popularPeople?.map(mapPersonToItem);
    } else {
      return;
    }
  }, [type, popularMovies, popularTvShows, popularPeople]);

  if (isEmpty(cards)) {
    return;
  }

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width justify-center">
      <Box className="max-w-[1200px]">
        <LargeCardsContainer
          title="Popular"
          tabNavigationBarPosition="end"
          tabs={tabs}
          cards={cards}
        />
      </Box>
    </FlexLayout>
  );
};
