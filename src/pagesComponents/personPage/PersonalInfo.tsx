"use client";

import { getPersonDetailsOptions } from "@/api/tmdbApi";
import { FlexLayout, Text } from "@/ui/components";
import { getAbsoluteImageUrl } from "@/utils/getAbsoluteImageUrl";
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
            <FlexLayout className="flex-col">
              <Text
                color="text-content-content-secondary"
                variant="caption-s"
                className="uppercase"
              >
                Known for
              </Text>
              <Text variant="paragraph-m" color="text-content-content-brand">
                {personDetails.known_for_department}
              </Text>
            </FlexLayout>
          )}
          {!!personDetails.birthday && (
            <FlexLayout className="flex-col">
              <Text
                color="text-content-content-secondary"
                variant="caption-s"
                className="uppercase"
              >
                Birthdate
              </Text>
              <Text variant="paragraph-m" color="text-content-content-brand">
                {dayjs(personDetails.birthday).format("D MMMM, YYYY")}
              </Text>
            </FlexLayout>
          )}
          {!!personDetails.place_of_birth && (
            <FlexLayout className="flex-col">
              <Text
                color="text-content-content-secondary"
                variant="caption-s"
                className="uppercase"
              >
                Place of birth
              </Text>
              <Text variant="paragraph-m" color="text-content-content-brand">
                {personDetails.place_of_birth}
              </Text>
            </FlexLayout>
          )}
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};
