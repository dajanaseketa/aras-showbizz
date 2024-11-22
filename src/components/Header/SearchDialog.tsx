import { FlexLayout, InputField, Divider } from "@/ui/components";
import { DialogProps, Dialog } from "@/ui/components/Dialog";

export const SearchDialog: React.FC<Omit<DialogProps, "children">> = ({
  title,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog title={title} isOpen={isOpen} onClose={onClose}>
      <FlexLayout className="flex-col min-w-center-grid-l-container-min-width max-w-center-grid-l-container-max-width gap-m">
        <InputField value={""} placeholder="Search" />
        <Divider variant="horizontal" />
      </FlexLayout>
    </Dialog>
  );
};
