import { HTMLAttributes, ReactNode } from "react";
import CLASSES from "../CustomCard/CustomCard.module.scss";

interface CustomCardProps extends HTMLAttributes<HTMLDivElement> {
  customRootClass?: string;
  children: ReactNode;
}

const CustomCard = ({ children, ...props }: CustomCardProps) => {
  const { customRootClass } = props;
  return (
    <div className={`${CLASSES.root} ${customRootClass}`} {...props}>
      {children}
    </div>
  );
};

export default CustomCard;
