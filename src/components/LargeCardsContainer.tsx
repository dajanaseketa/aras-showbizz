import { FlexLayout, Text } from "@/ui/components";
import { LargeCard, LargeCardProps } from "@/ui/components/LargeCard";
import { TextVariant } from "@/ui/components/Text";

interface LargeCardsContainerProps {
  title: string;
  titleVariant?: TextVariant;
  cards: LargeCardProps[];
}

export const LargeCardsContainer: React.FC<LargeCardsContainerProps> = ({
  title,
  titleVariant = "h3",
  cards,
}) => {
  return (
    <FlexLayout className="gap-l flex-col max-w-full">
      <Text variant={titleVariant} color="text-content-content-primary">
        {title}
      </Text>
      <FlexLayout className="gap-center-grid-l-gutter-width overflow-scroll">
        {cards.map((card, index) => (
          <LargeCard key={`${card.title}-${index}`} {...card} />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};
