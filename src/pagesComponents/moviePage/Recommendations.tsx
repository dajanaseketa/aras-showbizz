"use client";

import { getMovieRecommendationsOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import { mapItemsToCards } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";

interface RecommendationsProps {
  id: string;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ id }) => {
  const { data: movieRecommendations } = useQuery(
    getMovieRecommendationsOptions(id)
  );

  if (!movieRecommendations) {
    return;
  }

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width w-full justify-center bg-background-background-gray-light">
      <Box className="max-w-center-grid-l-container-max-width min-w-center-grid-l-container-min-width">
        <LargeCardsContainer
          title="Recommendations"
          cards={mapItemsToCards(movieRecommendations)}
        />
      </Box>
    </FlexLayout>
  );
};
