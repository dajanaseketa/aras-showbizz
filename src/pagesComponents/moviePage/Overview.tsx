"use client";

import { getMovieDetailsOptions } from "@/api/tmdbApi";
import { FlexLayout, Text } from "@/ui/components";
import {
  getAbsoluteImageUrl,
  getRatingPercentage,
} from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Image from "next/image";

interface OverviewProps {
  id: string;
}

export const Overview: React.FC<OverviewProps> = ({ id }) => {
  const { data: movieDetails } = useQuery(getMovieDetailsOptions(id));

  if (!movieDetails) {
    return;
  }

  return (
    <FlexLayout
      className="relative h-[596px] justify-center"
      style={{
        background: `url(${getAbsoluteImageUrl(
          movieDetails.poster_path
        )}), var(--accent-accent-600)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <FlexLayout className="absolute top-0 gap-center-grid-l-gutter-width py-[55px] w-[1200px]">
        <Image
          className="w-[324px] h-[486px] rounded-[10px]"
          src={getAbsoluteImageUrl(movieDetails.poster_path)}
          height={486}
          width={324}
          alt={`${movieDetails.title} movie cover`}
        />
        <FlexLayout className="flex-col gap-[37px]">
          <FlexLayout className="flex-col gap-2xs">
            <FlexLayout className="gap-m">
              <Text
                variant="h3"
                color="text-dark-content-content-primary"
                className="max-w-[70%]"
              >
                {movieDetails.title}
              </Text>
              <Text variant="h3" color="text-dark-content-content-secondary">
                ({dayjs(movieDetails.release_date).format("YYYY")})
              </Text>
            </FlexLayout>
            <FlexLayout className="justify-between">
              <Text
                variant="label-m-regular"
                color="text-dark-content-content-secondary"
              >
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </Text>
              <Text variant="h5" color="text-content-content-positive">
                {getRatingPercentage(movieDetails.vote_average)}%
              </Text>
            </FlexLayout>
          </FlexLayout>
          {!!movieDetails.overview && (
            <FlexLayout className="flex-col gap-3xs max-w-[846px]">
              <Text variant="h5" color="text-dark-content-content-primary">
                Overview
              </Text>
              <Text
                variant="paragraph-m"
                color="text-dark-content-content-secondary"
              >
                {movieDetails.overview}
              </Text>
            </FlexLayout>
          )}
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};
