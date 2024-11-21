import { FlexLayout, Text } from "@/ui/components";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  isDark?: boolean;
  href: string;
  imageUrl: string;
  title: string;
  description: string;
  rating: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  isDark,
  href,
  imageUrl,
  title,
  description,
  rating,
}) => {
  return (
    <Link href={href} passHref className="min-w-[240px]">
      <FlexLayout className="flex-col">
        <Image
          src={imageUrl || "/images/movie-image-placeholder.png"}
          alt={`${title} movie cover image`}
          className="rounded-lg"
          width={240}
          height={360}
        />
        <FlexLayout className="flex-col py-4 gap-3xs">
          <Text
            color={
              isDark
                ? "text-dark-content-content-primary"
                : "text-content-content-primary"
            }
            variant="title"
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
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </Link>
  );
};
