import { InformationCard, LargeCardsContainer } from "@/components";
import { Button, Divider, FlexLayout, Tag, Text } from "@/ui/components";
import { Media } from "./Media";
import isEmpty from "lodash/isEmpty";
import { Movie, Credits, Images, Keywords, TvShow } from "@/api/types";

interface DetailsProps {
  details?: Movie | TvShow;
  credits?: Credits;
  keywords?: Keywords;
  images?: Images;
}

export const Details: React.FC<DetailsProps> = ({
  details,
  credits,
  keywords,
  images,
}) => {
  if (!details) {
    return;
  }

  return (
    <FlexLayout className="justify-center py-2xl">
      <FlexLayout className="gap-center-grid-l-gutter-width w-center-grid-l-container-max-width">
        <FlexLayout className="flex-col gap-2xl max-w-[894px]">
          {!!credits && !isEmpty(credits.cast) && (
            <LargeCardsContainer
              cards={credits.cast.map((person) => ({
                href: `/person/${person.id}`,
                imageUrl: person.profile_path,
                title: person.name,
                description: person.character,
              }))}
              title="Cast"
            />
          )}
          {!!images && !isEmpty(images?.backdrops) && (
            <Media images={images?.backdrops} />
          )}
        </FlexLayout>
        <FlexLayout className="gap-s w-[276px] shrink-0">
          <Divider />
          <FlexLayout className="flex-col gap-m w-full">
            <Button label="Play now" isFullWidth />
            <Text variant="h4" color="text-content-content-primary">
              Facts
            </Text>
            <FlexLayout className="flex-col gap-s">
              {!!details.status && (
                <InformationCard label="Status" value={details.status} />
              )}
              {!isEmpty(details.production_companies) && (
                <InformationCard
                  label="Network"
                  value={details.production_companies
                    .map((company) => company.name)
                    .join(", ")}
                />
              )}
              {!!details.original_language && (
                <InformationCard
                  label="Original language"
                  value={details.original_language}
                />
              )}
              {!!keywords && !isEmpty(keywords.keywords) && (
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
                      {keywords.keywords.map((keyword, index) => (
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
