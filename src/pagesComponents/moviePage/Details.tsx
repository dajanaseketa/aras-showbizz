"use client";

import {
  getMovieCreditsOptions,
  getMovieDetailsOptions,
  getMovieImagesOptions,
  getMovieKeywordsOptions,
} from "@/api/tmdbApi";
import { InformationCard, LargeCardsContainer } from "@/components";
import { Button, Divider, FlexLayout, Tag, Text } from "@/ui/components";
import { useQuery } from "@tanstack/react-query";
import { Media } from "./Media";

interface DetailsProps {
  id: string;
}

export const Details: React.FC<DetailsProps> = ({ id }) => {
  const { data: movieDetails } = useQuery(getMovieDetailsOptions(id));
  const { data: movieCredits } = useQuery(getMovieCreditsOptions(id));
  const { data: movieKeywords } = useQuery(getMovieKeywordsOptions(id));
  const { data: movieImages } = useQuery(getMovieImagesOptions(id));

  if (!movieDetails) {
    return;
  }

  return (
    <FlexLayout className="justify-center py-2xl">
      <FlexLayout className="gap-center-grid-l-gutter-width w-center-grid-l-container-max-width">
        {!!movieCredits && !!movieCredits.cast && (
          <FlexLayout className="flex-col gap-2xl max-w-[894px]">
            <LargeCardsContainer
              cards={movieCredits.cast.map((person) => ({
                href: `/person/${person.id}`,
                imageUrl: person.profile_path,
                title: person.name,
                description: person.character,
              }))}
              title="Cast"
            />
            <Media images={movieImages?.backdrops} />
          </FlexLayout>
        )}
        <FlexLayout className="gap-s w-[276px]">
          <Divider />
          <FlexLayout className="flex-col gap-m w-full">
            <Button label="Play now" isFullWidth />
            <Text variant="h4" color="text-content-content-primary">
              Facts
            </Text>
            <FlexLayout className="flex-col gap-s">
              {!!movieDetails.status && (
                <InformationCard label="Status" value={movieDetails.status} />
              )}
              {!!movieDetails.production_companies && (
                <InformationCard
                  label="Network"
                  value={movieDetails.production_companies
                    .map((company) => company.name)
                    .join(", ")}
                />
              )}
              {!!movieDetails.original_language && (
                <InformationCard
                  label="Original language"
                  value={movieDetails.original_language}
                />
              )}
              {!!movieKeywords && !!movieKeywords.keywords.length && (
                <FlexLayout className="flex-col gap-3xs">
                  <Text
                    color="text-content-content-secondary"
                    variant="caption-s"
                    className="uppercase"
                  >
                    Keywords
                  </Text>
                  <Text
                    variant="paragraph-m"
                    color="text-content-content-brand"
                  >
                    <FlexLayout className="gap-2 flex-wrap">
                      {movieKeywords.keywords.map((keyword, index) => (
                        <Tag
                          key={`${keyword.name}-${index}`}
                          label={keyword.name}
                        />
                      ))}
                    </FlexLayout>
                  </Text>
                </FlexLayout>
              )}
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};
