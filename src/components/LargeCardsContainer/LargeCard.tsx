import { Box, FlexLayout, Text } from "@/ui/components";
import { getAbsoluteImageUrl } from "@/utils/apiDataTransformations";
import Image from "next/image";
import Link from "next/link";

export interface LargeCardProps {
  isDark?: boolean;
  href: string;
  imageUrl: string;
  title: string;
  description?: string;
  rating?: string;
}

export const LargeCard: React.FC<LargeCardProps> = ({
  isDark = false,
  href,
  imageUrl,
  title,
  description,
  rating,
}) => {
  return (
    <Link href={href} passHref className="w-[240px]">
      <FlexLayout className="flex-col group">
        <Box className="overflow-hidden rounded-lg w-[240px] h-[360px]">
          <Image
            src={getAbsoluteImageUrl(imageUrl)}
            alt={`${title} movie cover image`}
            className="group-hover:scale-110 object-cover transition-all"
            width={240}
            height={360}
          />
        </Box>
        <FlexLayout className="flex-col py-4 gap-3xs">
          <Text
            color={
              isDark
                ? "text-dark-content-content-primary group-hover:text-dark-content-content-hover"
                : "text-content-content-primary group-hover:text-content-content-hover"
            }
            variant="title"
            className="truncate"
          >
            {title}
          </Text>
          <FlexLayout className="justify-between">
            <Text
              color={
                isDark
                  ? "text-dark-content-content-secondary"
                  : "text-content-content-secondary"
              }
              variant="label-s-regular"
            >
              {description}
            </Text>
            {rating && (
              <Text
                color={
                  isDark
                    ? "text-dark-content-content-primary"
                    : "text-content-content-primary"
                }
                variant="label-s-regular"
              >
                {rating}
              </Text>
            )}
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </Link>
  );
};
