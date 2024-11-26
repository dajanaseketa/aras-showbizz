"use client";

import { FlexLayout, Icon } from "@/ui/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchDialog } from "./SearchDialog";

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <FlexLayout
      as="header"
      className="h-[74px] bg-dark-background-background-black sticky top-0 px-stretch-grid-margin-width py-[14px] justify-between items-center z-10"
    >
      <Link href="/" passHref>
        <Image src="/images/logo.svg" alt="Logo" width={47.75} height={14.78} />
      </Link>
      <Icon
        icon={isSearchOpen ? "close" : "search"}
        color="text-dark-content-content-brand"
        onClick={() => setIsSearchOpen(true)}
      />
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </FlexLayout>
  );
};
