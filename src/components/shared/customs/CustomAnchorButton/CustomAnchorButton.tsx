import { AnchorHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomAnchorButton.module.scss";

interface CustomAnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  customrootclass?: string;
  children: ReactNode;
}

const CustomAnchorButton = ({
  customrootclass,
  children,
  ...props
}: CustomAnchorButtonProps) => {
  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <a {...props}>{children}</a>
    </div>
  );
};

export default CustomAnchorButton;
