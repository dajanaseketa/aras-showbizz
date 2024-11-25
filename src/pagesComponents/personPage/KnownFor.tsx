"use client";

import { getPersonCreditsOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { mapItemsToCards } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";

interface KnownForProps {
  id: string;
}

export const KnownFor: React.FC<KnownForProps> = ({ id }) => {
  const { data: personCredits } = useQuery(getPersonCreditsOptions(id));

  if (!personCredits?.cast) {
    return;
  }

  return (
    <LargeCardsContainer
      title="Known For"
      cards={mapItemsToCards(personCredits.cast)}
    />
  );
};
