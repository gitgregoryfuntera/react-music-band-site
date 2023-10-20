import CLASSES from "./SideNav.module.scss";
import { motion } from "framer-motion";

interface SideNavProps {
  isOpen: boolean;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const SideNav = (props: SideNavProps) => {
  const { isOpen } = props;

  return (
    <div className={CLASSES.root}>
      <motion.nav
        className={CLASSES.nav}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          duration: 0.5,
        }}
      >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </motion.nav>
    </div>
  );
};

export default SideNav;
