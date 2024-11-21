import { FlexLayout, Icon } from "@/ui/components";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <FlexLayout
      as="header"
      className="h-[74px] bg-dark-background-background-black sticky top-0 px-stretch-grid-margin-width py-[14px] justify-between items-center"
    >
      <Link href="/" passHref>
        <Image src="/images/logo.svg" alt="Logo" width={47.75} height={14.78} />
      </Link>
      <Icon icon="search" color="text-dark-content-content-brand" />
    </FlexLayout>
  );
};
