"use client";

import { FlexLayout, Text, Box } from "@/ui/components";
import { MediaImage } from "@/api/types";
import Image from "next/image";
import { useState } from "react";
import { MediaImagePreview } from "./MediaImagePreview";
import { getAbsoluteImageUrl } from "@/utils/apiDataTransformations";

interface MediaProps {
  images?: MediaImage[];
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
          <ImageCard
            key={index}
            width={image.width}
            height={image.height}
            imageUrl={getAbsoluteImageUrl(image.file_path)}
          />
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};

interface ImageCardProps {
  width: number;
  height: number;
  imageUrl: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, width, height }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <Box className="group flex-shrink-0 overflow-hidden rounded-lg">
      <Image
        alt="Media image"
        className="rounded-lg cursor-pointer group-hover:scale-110 object-cover transition-all"
        src={imageUrl}
        width={320}
        height={180}
        onClick={() => setIsPreviewOpen(true)}
      />
      <MediaImagePreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imageSrc={imageUrl}
        width={width}
        height={height}
      />
    </Box>
  );
};
