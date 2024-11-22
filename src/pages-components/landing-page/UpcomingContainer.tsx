"use client";

import { upcomingMoviesOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const UpcomingContainer: React.FC = () => {
  const { data: upcomingMovies } = useQuery(upcomingMoviesOptions);

  const cards = useMemo(
    () =>
      upcomingMovies?.map((movie) => ({
        href: `/movie/${movie.id}`,
        imageUrl: movie.poster_path,
        title: movie.title,
        description: movie.release_date,
        rating: `${movie.popularity}%`,
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
