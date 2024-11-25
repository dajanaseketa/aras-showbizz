import { FlexLayout, Text } from "@/ui/components";

interface InformationCardProps {
  label: string;
  value: string;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  label,
  value,
}) => {
  return (
    <FlexLayout className="flex-col">
      <Text
        color="text-content-content-secondary"
        variant="caption-s"
        className="uppercase"
      >
        {label}
      </Text>
      <Text variant="paragraph-m" color="text-content-content-brand">
        {value}
      </Text>
    </FlexLayout>
  );
};
