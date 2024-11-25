"use client";

import { getPersonDetailsOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { FlexLayout, Text } from "@/ui/components";
import { mapMediaItemsToItems } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

interface BiographyProps {
  id: string;
}

export const Biography: React.FC<BiographyProps> = ({ id }) => {
  const { data: personDetails } = useQuery(getPersonDetailsOptions(id));

  const cards = useMemo(() => {
    if (!personDetails?.known_for) {
      return [];
    }

    return mapMediaItemsToItems(personDetails.known_for);
  }, [personDetails]);

  if (!personDetails) {
    return;
  }

  return (
    <FlexLayout className="flex-col gap-m text-content-content-primary">
      <Text variant="h3">{personDetails.name}</Text>
      {!!personDetails.biography && (
        <FlexLayout className="flex-col gap-2xs">
          <Text variant="h4">Biography</Text>
          <Text variant="paragraph-m" color="text-content-content-secondary">
            {personDetails.biography}
          </Text>
        </FlexLayout>
      )}
      <LargeCardsContainer cards={cards} />
    </FlexLayout>
  );
};
