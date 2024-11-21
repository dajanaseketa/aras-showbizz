import { FlexLayout, GridLayout, Text } from "@/ui/components";
import { SmallCard, SmallCardProps } from "@/ui/components/SmallCard";

interface SmallCardsContainerProps {
  title?: string;
  cards: SmallCardProps[];
}

export const SmallCardsContainer: React.FC<SmallCardsContainerProps> = ({
  title,
  cards,
}) => {
  return (
    <FlexLayout className="gap-s flex-col">
      {title && (
        <Text variant="h5" color="text-content-content-primary">
          {title}
        </Text>
      )}
      <GridLayout className="gap-center-grid-l-gutter-width grid-cols-2">
        {cards.map((card, index) => (
          <SmallCard key={`${card.label}-${index}`} {...card} />
        ))}
      </GridLayout>
    </FlexLayout>
  );
};
