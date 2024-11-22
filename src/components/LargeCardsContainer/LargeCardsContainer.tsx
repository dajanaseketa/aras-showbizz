import { FlexLayout, Text } from "@/ui/components";
import { LargeCard, LargeCardProps } from "./LargeCard";
import { TextVariant } from "@/ui/components/Text";
import { TabProps } from "../TabsNavigationBar/Tab";
import { TabsNavigationBar } from "../TabsNavigationBar";
import clsx from "clsx";

interface LargeCardsContainerProps {
  cards: LargeCardProps[];
  title?: string;
  titleVariant?: TextVariant;
  isDark?: boolean;
  tabs?: TabProps[];
  tabNavigationBarPosition?: "start" | "end";
}

export const LargeCardsContainer: React.FC<LargeCardsContainerProps> = ({
  title,
  titleVariant = "h3",
  cards,
  isDark = false,
  tabs,
  tabNavigationBarPosition = "start",
}) => {
  return (
    <FlexLayout className="gap-l flex-col max-w-full">
      <FlexLayout
        className={clsx(
          "gap-l items-center",
          tabNavigationBarPosition === "end" && "justify-between"
        )}
      >
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
        {tabs && <TabsNavigationBar tabs={tabs} />}
      </FlexLayout>
      <FlexLayout className="gap-center-grid-l-gutter-width overflow-scroll">
        {cards.map((card, index) => (
          <LargeCard key={`${card.title}-${index}`} {...card} isDark={isDark} />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};
