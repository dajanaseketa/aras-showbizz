import * as ReactDialog from "@radix-ui/react-dialog";

export interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <ReactDialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {isOpen && (
        <ReactDialog.Portal>
          <ReactDialog.Overlay className="fixed top-[74px] z-10">
            <ReactDialog.Content className="flex flex-col outline-none bg-white w-screen h-screen py-m items-center">
              <ReactDialog.Title className="hidden">{title}</ReactDialog.Title>
              {children}
            </ReactDialog.Content>
          </ReactDialog.Overlay>
        </ReactDialog.Portal>
      )}
    </ReactDialog.Root>
  );
};
