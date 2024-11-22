"use client";

import {
  popularMoviesOptions,
  popularPeopleOptions,
  popularTvOptions,
} from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { LargeCardProps } from "@/components/LargeCardsContainer/LargeCard";
import { Box, FlexLayout } from "@/ui/components";
import { mapItemsToCards } from "@/utils/itemTypeCheck";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export const PopularContainer: React.FC = () => {
  const { data: popularMovies } = useQuery(popularMoviesOptions);
  const { data: popularTv } = useQuery(popularTvOptions);
  const { data: popularPeople } = useQuery(popularPeopleOptions);

  const [type, setType] = useState<"movies" | "tv" | "people">("movies");

  const tabs = [
    {
      label: "Movies",
      isSelected: type === "movies",
      onClick: () => setType("movies"),
    },
    {
      label: "On TV",
      isSelected: type === "tv",
      onClick: () => setType("tv"),
    },
    {
      label: "People",
      isSelected: type === "people",
      onClick: () => setType("people"),
    },
  ];

  const cards = useMemo(() => {
    const selectedItems =
      type === "movies"
        ? popularMovies
        : type === "tv"
        ? popularTv
        : popularPeople;

    if (!selectedItems) {
      return [];
    }

    return mapItemsToCards(selectedItems);
  }, [type, popularMovies, popularTv, popularPeople]);

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width justify-center">
      <Box className="max-w-[1200px]">
        <LargeCardsContainer
          title="Popular"
          tabNavigationBarPosition="end"
          tabs={tabs}
          cards={cards as LargeCardProps[]}
        />
      </Box>
    </FlexLayout>
  );
};
