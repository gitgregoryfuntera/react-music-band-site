import { ButtonHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomButton.module.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customrootclass?: string;
  customButtonClassType?: "gradientRound" | "gradientCircle" | "round";
  customButtonHoverType?: "gradientHover" | "defaultHover" | "radicalRedHover";
  children: ReactNode;
}

const CustomButton = ({
  children,
  customrootclass,
  customButtonClassType,
  customButtonHoverType,
  ...props
}: CustomButtonProps) => {
  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <button
        className={`${CLASSES[customButtonClassType as string]} ${
          CLASSES[customButtonHoverType as string]
        }`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
