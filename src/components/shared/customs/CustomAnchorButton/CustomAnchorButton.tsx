import { AnchorHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomAnchorButton.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface CustomAnchorButtonProps extends LinkProps {
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
      <Link {...props}>{children}</Link>
    </div>
  );
};

export default CustomAnchorButton;
