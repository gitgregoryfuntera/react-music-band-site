import { ButtonHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomButton.module.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customrootclass?: string;
  customButtonClassType?: "gradientRound" | "round";
  children: ReactNode;
}

const CustomButton = ({
  children,
  customrootclass,
  customButtonClassType,
  ...props
}: CustomButtonProps) => {
  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <button
        className={`${CLASSES[customButtonClassType as string]}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
