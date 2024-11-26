import { FlexLayout } from "@/ui/components";
import Image from "next/image";
import * as ReactDialog from "@radix-ui/react-dialog";

export interface MediaImagePreviewProps {
  isOpen: boolean;
  onClose(): void;
  imageSrc: string;
  width: number;
  height: number;
}

export const MediaImagePreview: React.FC<MediaImagePreviewProps> = ({
  isOpen,
  onClose,
  imageSrc,
  width,
  height,
}) => {
  return (
    <ReactDialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {isOpen && (
        <ReactDialog.Portal>
          <ReactDialog.Overlay
            className="fixed flex top-[74px] z-10 bg-black w-full bg-opacity-75"
            onClick={onClose}
          >
            <ReactDialog.Content className="flex pt-2xl w-full flex-col h-screen outline-none items-center">
              <ReactDialog.Title className="hidden">
                Image Preview
              </ReactDialog.Title>
              <FlexLayout className="flex-col max-w-[70%]">
                <Image
                  src={imageSrc}
                  alt="Media Image"
                  width={width}
                  height={height}
                />
              </FlexLayout>
            </ReactDialog.Content>
          </ReactDialog.Overlay>
        </ReactDialog.Portal>
      )}
    </ReactDialog.Root>
  );
};
