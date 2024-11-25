"use client";

import {
  getMovieCreditsOptions,
  getMovieDetailsOptions,
  getMovieImagesOptions,
  getMovieKeywordsOptions,
  getMovieRecommendationsOptions,
} from "@/api/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import { Overview } from "./Overview";
import { Details } from "./Details";
import { Recommendations } from "./Recommendations";
import { mapMovieToItem } from "@/utils/apiDataTransformations";

interface MovieContentProps {
  id: string;
}

export const MovieContent: React.FC<MovieContentProps> = ({ id }) => {
  const { data: movieDetails } = useQuery(getMovieDetailsOptions(id));
  const { data: movieCredits } = useQuery(getMovieCreditsOptions(id));
  const { data: movieKeywords } = useQuery(getMovieKeywordsOptions(id));
  const { data: movieImages } = useQuery(getMovieImagesOptions(id));
  const { data: movieRecommendations } = useQuery(
    getMovieRecommendationsOptions(id)
  );

  if (!movieDetails) {
    return;
  }

  return (
    <>
      <Overview details={mapMovieToItem(movieDetails)} />
      <Details
        details={movieDetails}
        credits={movieCredits}
        keywords={movieKeywords}
        images={movieImages}
      />
      <Recommendations recommendations={movieRecommendations} />
    </>
  );
};
