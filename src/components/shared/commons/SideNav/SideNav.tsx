import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./SideNav.module.scss";
import { motion } from "framer-motion";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SideNavProps {
  isOpen: boolean;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

const SideNav = (props: SideNavProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
        <ul>
          <li>
            <div className={CLASSES.listItemWrapper}>
              <CustomAnchorButton>Home</CustomAnchorButton>
              <CustomButton
                onClick={() => setIsExpanded((prevState) => !prevState)}
              >
                <FontAwesomeIcon icon={isExpanded ? faMinus : faAdd} />
              </CustomButton>
            </div>
            {isExpanded && (
              <div className={CLASSES.listItemInner}>
                <CustomAnchorButton>Main Demo</CustomAnchorButton>
              </div>
            )}
          </li>
          <li>
            <div className={CLASSES.listItemWrapper}>
              <CustomAnchorButton>Albums</CustomAnchorButton>
              <CustomButton>
                <FontAwesomeIcon icon={faAdd} />
              </CustomButton>
            </div>
          </li>
          <li>
            <div className={CLASSES.listItemWrapper}>
              <CustomAnchorButton>Live</CustomAnchorButton>
            </div>
          </li>
          <li>
            <div className={CLASSES.listItemWrapper}>
              <CustomAnchorButton>About</CustomAnchorButton>
            </div>
          </li>
          <li>
            <div className={CLASSES.listItemWrapper}>
              <CustomAnchorButton>Gallery</CustomAnchorButton>
            </div>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default SideNav;