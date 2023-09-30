import { ReactNode } from "react";
import CLASSES from "../CustomCard/CustomCard.module.scss";

interface CustomCardProps {
  customRootClass?: string;
  children: ReactNode;
}

const CustomCard = ({ children, ...props }: CustomCardProps) => {
  const { customRootClass } = props;
  return <div className={`${CLASSES.root} ${customRootClass}`}>{children}</div>;
};

export default CustomCard;
