import { Button, FlexLayout, Text, Icon } from "@/ui/components";
import clsx from "clsx";
import Link from "next/link";

interface SmallCardProps {
  href: string;
  label: string;
}

export const SmallCard: React.FC<SmallCardProps> = ({ href, label }) => {
  return (
    <Link href={href} passHref className="w-full h-fit">
      <FlexLayout
        className={clsx(
          "text-content-content-primary px-2xs py-s gap-4 border border-border-border-low-contrast justify-between",
          "hover:border-border-border-high-contrast focus:border-border-border-high-contrast hover:underline focus:underline"
        )}
      >
        <Text variant="button-l">{label}</Text>
        <Icon icon="arrowRight" />
      </FlexLayout>
    </Link>
  );
};
