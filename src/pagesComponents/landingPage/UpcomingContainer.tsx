"use client";

import { upcomingMoviesOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import { getRatingPercentage } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useMemo } from "react";

export const UpcomingContainer: React.FC = () => {
  const { data: upcomingMovies } = useQuery(upcomingMoviesOptions);

  const cards = useMemo(
    () =>
      upcomingMovies?.map((movie) => ({
        href: `/movie/${movie.id}`,
        imageUrl: movie.poster_path,
        title: movie.title,
        description: dayjs(movie.release_date).format("D MMM: YYYY"),
        rating: `${getRatingPercentage(movie.vote_average)}%`,
      })),
    [upcomingMovies]
  );

  if (!cards) {
    return;
  }

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width bg-dark-background-background-black justify-center">
      <Box className="max-w-[1200px]">
        <LargeCardsContainer isDark title="Upcoming" cards={cards} />
      </Box>
    </FlexLayout>
  );
};
