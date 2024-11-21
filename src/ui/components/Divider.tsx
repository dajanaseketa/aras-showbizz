import clsx from "clsx";
import { Box } from "./Box";

const variantStylesMap = {
  horizontal: "h-[1px] w-full",
  vertical: "w-[1px] h-full",
};

type DividerVariant = keyof typeof variantStylesMap;

interface DividerProps {
  variant?: DividerVariant;
}

export const Divider: React.FC<DividerProps> = ({ variant = "vertical" }) => {
  const styles = variantStylesMap[variant];

  return <Box className={clsx("bg-border-border-low-contrast", styles)} />;
};
