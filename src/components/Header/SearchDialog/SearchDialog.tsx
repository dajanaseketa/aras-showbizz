import { FlexLayout, InputField } from "@/ui/components";
import { useState } from "react";
import { SearchQueryResults } from "./SearchQueryResults";
import * as ReactDialog from "@radix-ui/react-dialog";
import useDebounce from "@/hooks/useDebounce";

export interface SearchDialogProps {
  isOpen: boolean;
  onClose(): void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  function handleClose() {
    onClose();
    setSearchQuery("");
  }

  return (
    <ReactDialog.Root
      open={isOpen}
      onOpenChange={(open) => !open && handleClose()}
    >
      {isOpen && (
        <ReactDialog.Portal>
          <ReactDialog.Overlay className="fixed top-[74px] z-10">
            <ReactDialog.Content className="flex flex-col outline-none bg-white w-screen h-screen pt-m pb-4xl items-center overflow-y-scroll">
              <ReactDialog.Title className="hidden">Search</ReactDialog.Title>
              <FlexLayout className="flex-col w-center-grid-l-container-max-width gap-m">
                <InputField
                  value={searchQuery}
                  placeholder="Search"
                  onChange={(value) => setSearchQuery(value)}
                />
                <SearchQueryResults searchQuery={debouncedSearchQuery} />
              </FlexLayout>
            </ReactDialog.Content>
          </ReactDialog.Overlay>
        </ReactDialog.Portal>
      )}
    </ReactDialog.Root>
  );
};
