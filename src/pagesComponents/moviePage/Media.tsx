import { FlexLayout, Text } from "@/ui/components";
import { MovieImage } from "@/api/types";
import Image from "next/image";
import { getAbsoluteImageUrl } from "@/utils/apiDataTransformations";

interface MediaProps {
  images?: MovieImage[];
}

export const Media: React.FC<MediaProps> = ({ images }) => {
  if (!images) {
    return;
  }

  return (
    <FlexLayout className="gap-l flex-col max-w-full">
      <Text variant="h3" color="text-content-content-primary">
        Media
      </Text>
      <FlexLayout className="gap-center-grid-l-gutter-width overflow-scroll">
        {images.map((image, index) => (
          <Image
            key={index}
            alt=""
            className="rounded-lg w-[320px] h-[180px]"
            src={getAbsoluteImageUrl(image.file_path)}
            width={320}
            height={180}
          />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};
