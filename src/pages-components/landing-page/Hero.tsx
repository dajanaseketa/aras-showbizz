import Image from "next/image";
import { Box, FlexLayout, Text } from "@/ui/components";

export const Hero: React.FC = () => {
  return (
    <Box className="relative">
      <Image
        className="w-full"
        src="/images/hero.png"
        width={1900}
        height={596}
        alt="Content hero image"
      />
      <FlexLayout
        className="absolute flex-col w-full items-center top-[35%] gap-s text-dark-content-content-primary"
        style={{ position: "absolute" }}
      >
        <Text as="h1" variant="h1">
          Welcome.
        </Text>
        <Text as="h4" variant="h4">
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
      </FlexLayout>
    </Box>
  );
};
