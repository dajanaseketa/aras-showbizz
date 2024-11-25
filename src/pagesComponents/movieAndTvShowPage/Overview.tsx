import { FlexLayout, Text } from "@/ui/components";
import { getAbsoluteImageUrl, Item } from "@/utils/apiDataTransformations";
import dayjs from "dayjs";
import Image from "next/image";

interface OverviewProps {
  details?: Item;
}

export const Overview: React.FC<OverviewProps> = ({ details }) => {
  if (!details) {
    return;
  }

  return (
    <FlexLayout
      className="relative h-[596px] justify-center"
      style={{
        background: `url(${getAbsoluteImageUrl(
          details.imageUrl
        )}), var(--accent-accent-600)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <FlexLayout className="absolute top-0 gap-center-grid-l-gutter-width py-[55px] w-[1200px]">
        <Image
          className="w-[324px] h-[486px] rounded-[10px]"
          src={getAbsoluteImageUrl(details.imageUrl)}
          height={486}
          width={324}
          alt={`${details.title} movie cover`}
        />
        <FlexLayout className="flex-col gap-[37px]">
          <FlexLayout className="flex-col gap-2xs">
            <FlexLayout className="gap-m">
              <Text
                variant="h3"
                color="text-dark-content-content-primary"
                className="max-w-[70%]"
              >
                {details.title}
              </Text>
              <Text variant="h3" color="text-dark-content-content-secondary">
                ({dayjs(details.releaseDate).format("YYYY")})
              </Text>
            </FlexLayout>
            <FlexLayout className="justify-between">
              <Text
                variant="label-m-regular"
                color="text-dark-content-content-secondary"
              >
                {details.genres}
              </Text>
              <Text variant="h5" color="text-content-content-positive">
                {details.rating}
              </Text>
            </FlexLayout>
          </FlexLayout>
          {!!details.overview && (
            <FlexLayout className="flex-col gap-3xs max-w-[846px]">
              <Text variant="h5" color="text-dark-content-content-primary">
                Overview
              </Text>
              <Text
                variant="paragraph-m"
                color="text-dark-content-content-secondary"
              >
                {details.overview}
              </Text>
            </FlexLayout>
          )}
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};
