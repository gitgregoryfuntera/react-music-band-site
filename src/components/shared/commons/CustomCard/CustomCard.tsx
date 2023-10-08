import { HTMLAttributes, ReactNode } from "react";
import CLASSES from "../CustomCard/CustomCard.module.scss";

interface CustomCardProps extends HTMLAttributes<HTMLDivElement> {
  customrootclass?: string;
  children: ReactNode;
}

const CustomCard = ({ children, ...props }: CustomCardProps) => {
  const { customrootclass } = props;
  return (
    <div className={`${CLASSES.root} ${customrootclass}`} {...props}>
      {children}
    </div>
  );
};

export default CustomCard;
