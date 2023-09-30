import { ButtonHTMLAttributes, ReactNode } from "react";
import CLASSES from "./CustomButton.module.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customRootClass?: string;
  customButtonClassType?: 'gradientRound' | 'round';
  children: ReactNode;
}

const CustomButton = ({
  children,
  customRootClass,
  customButtonClassType,
  ...props
}: CustomButtonProps) => {
  return (
    <div className={`${CLASSES.root} ${customRootClass}`}>
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
