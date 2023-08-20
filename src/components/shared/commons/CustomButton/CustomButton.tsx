import { ButtonHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomButton.module.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <div className={CLASSES.root}>
      <button {...props}>{children}</button>
    </div>
  );
};

export default CustomButton;
