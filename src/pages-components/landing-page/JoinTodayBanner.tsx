import { Box, Button, FlexLayout, Text } from "@/ui/components";

export const JoinTodayBanner: React.FC = () => {
  return (
    <Box className="bg-dark-background-background-black py-2xl">
      <FlexLayout className="flex-col gap-2xs mx-auto max-w-center-grid-l-container-max-width min-w-center-grid-l-container-min-width">
        <FlexLayout className="flex-col gap-2xs pl-2xs">
          <Text variant="h3" color="text-dark-content-content-primary">
            Join Today
          </Text>
          <Text
            variant="paragraph-m"
            color="text-dark-content-content-secondary"
          >
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like Netflix, Amazon Prime Video, FlixOlé, MUBI, and Zee5.
          </Text>
        </FlexLayout>
        <Button variant="secondary" label="Sign Up" iconRight="arrowRight" />
      </FlexLayout>
    </Box>
  );
};
