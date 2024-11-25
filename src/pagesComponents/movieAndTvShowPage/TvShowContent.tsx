"use client";

import {
  getTvShowCreditsOptions,
  getTvShowDetailsOptions,
  getTvShowImagesOptions,
  getTvShowKeywordsOptions,
  getTvShowRecommendationsOptions,
} from "@/api/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import { Overview } from "./Overview";
import { Details } from "./Details";
import { Recommendations } from "./Recommendations";
import { mapTvShowToItem } from "@/utils/apiDataTransformations";

interface TvShowContentProps {
  id: string;
}

export const TvShowContent: React.FC<TvShowContentProps> = ({ id }) => {
  const { data: tvShowDetails } = useQuery(getTvShowDetailsOptions(id));
  const { data: tvShowCredits } = useQuery(getTvShowCreditsOptions(id));
  const { data: tvShowKeywords } = useQuery(getTvShowKeywordsOptions(id));
  const { data: tvShowImages } = useQuery(getTvShowImagesOptions(id));
  const { data: tvShowRecommendations } = useQuery(
    getTvShowRecommendationsOptions(id)
  );

  if (!tvShowDetails) {
    return;
  }

  return (
    <>
      <Overview details={mapTvShowToItem(tvShowDetails)} />
      <Details
        details={tvShowDetails}
        credits={tvShowCredits}
        keywords={tvShowKeywords}
        images={tvShowImages}
      />
      <Recommendations recommendations={tvShowRecommendations} />
    </>
  );
};
