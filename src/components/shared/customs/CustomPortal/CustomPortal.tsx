import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface CustomPortalProps {
  children: ReactNode;
}

const CustomPortal = (props: CustomPortalProps) => {
  return createPortal(<>{props.children}</>, document.body);
};

export default CustomPortal;
