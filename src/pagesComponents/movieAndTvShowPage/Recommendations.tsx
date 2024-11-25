import { Movie, TvShow } from "@/api/types";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import { mapMediaItemsToItems } from "@/utils/apiDataTransformations";
import isEmpty from "lodash/isEmpty";

interface RecommendationsProps {
  recommendations?: Movie[] | TvShow[];
}

export const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  if (!recommendations || isEmpty(recommendations)) {
    return;
  }

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width w-full justify-center bg-background-background-gray-light">
      <Box className="max-w-center-grid-l-container-max-width min-w-center-grid-l-container-min-width">
        <LargeCardsContainer
          title="Recommendations"
          cards={mapMediaItemsToItems(recommendations)}
        />
      </Box>
    </FlexLayout>
  );
};
