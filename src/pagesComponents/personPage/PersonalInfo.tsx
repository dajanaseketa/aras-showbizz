"use client";

import { getPersonDetailsOptions } from "@/api/tmdbApi";
import { InformationCard } from "@/components";
import { FlexLayout, Text } from "@/ui/components";
import { getAbsoluteImageUrl } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Image from "next/image";

interface PersonalInfoProps {
  id: string;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ id }) => {
  const { data: personDetails } = useQuery(getPersonDetailsOptions(id));

  if (!personDetails) {
    return;
  }

  return (
    <FlexLayout className="flex-col gap-m shrink-0 w-[250px]">
      <Image
        className="rounded"
        src={getAbsoluteImageUrl(personDetails.profile_path)}
        alt={personDetails.name}
        width={250}
        height={375}
      />
      <FlexLayout className="flex-col gap-m">
        <Text variant="h4" color="text-content-content-primary">
          Personal Info
        </Text>
        <FlexLayout className="flex-col gap-s">
          {!!personDetails.known_for_department && (
            <InformationCard
              label="Known for"
              value={personDetails.known_for_department}
            />
          )}
          {!!personDetails.birthday && (
            <InformationCard
              label="Birthdate"
              value={dayjs(personDetails.birthday).format("D MMMM, YYYY")}
            />
          )}
          {!!personDetails.place_of_birth && (
            <InformationCard
              label="Place of birth"
              value={personDetails.place_of_birth}
            />
          )}
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};
