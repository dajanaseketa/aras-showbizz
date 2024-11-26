"use client";

import { getPersonDetailsOptions } from "@/api/tmdbApi";
import { FlexLayout, Text } from "@/ui/components";
import { useQuery } from "@tanstack/react-query";

interface BiographyProps {
  id: string;
}

export const Biography: React.FC<BiographyProps> = ({ id }) => {
  const { data: personDetails } = useQuery(getPersonDetailsOptions(id));

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
    </FlexLayout>
  );
};
