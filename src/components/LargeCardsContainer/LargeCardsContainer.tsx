import { FlexLayout, Text } from "@/ui/components";
import { LargeCard, LargeCardProps } from "./LargeCard";
import { TextVariant } from "@/ui/components/Text";

interface LargeCardsContainerProps {
  cards: LargeCardProps[];
  title?: string;
  titleVariant?: TextVariant;
  isDark?: boolean;
}

export const LargeCardsContainer: React.FC<LargeCardsContainerProps> = ({
  title,
  titleVariant = "h3",
  cards,
  isDark = false,
}) => {
  return (
    <FlexLayout className="gap-l flex-col max-w-full">
      {title && (
        <Text
          variant={titleVariant}
          color={
            isDark
              ? "text-dark-content-content-primary"
              : "text-content-content-primary"
          }
        >
          {title}
        </Text>
      )}
      <FlexLayout className="gap-center-grid-l-gutter-width overflow-scroll">
        {cards.map((card, index) => (
          <LargeCard key={`${card.title}-${index}`} {...card} isDark={isDark} />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};
