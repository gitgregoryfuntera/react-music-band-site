import { InputHTMLAttributes } from "react";
import CLASSES from "./CustomInput.module.scss";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  customrootclass?: string;
  customInputClassType?: "default";
}

const CustomInput = (props: CustomInputProps) => {
  const { customrootclass, customInputClassType } = props;
  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <input className={CLASSES[customInputClassType as string]} {...props} />
    </div>
  );
};

export default CustomInput;
