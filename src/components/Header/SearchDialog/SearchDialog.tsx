import { FlexLayout, InputField } from "@/ui/components";
import { DialogProps, Dialog } from "@/ui/components/Dialog";
import { useState } from "react";
import { SearchQueryResults } from "./SearchQueryResults";

export const SearchDialog: React.FC<Omit<DialogProps, "children">> = ({
  title,
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Dialog
      title={title}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSearchQuery("");
      }}
    >
      <FlexLayout className="flex-col min-w-center-grid-l-container-min-width max-w-center-grid-l-container-max-width gap-m">
        <InputField
          value={searchQuery}
          placeholder="Search"
          onChange={(value) => setSearchQuery(value)}
        />
        <SearchQueryResults searchQuery={searchQuery} />
      </FlexLayout>
    </Dialog>
  );
};
