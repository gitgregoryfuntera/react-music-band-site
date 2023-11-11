import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./SideNav.module.scss";
import { motion } from "framer-motion";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

interface SideNavProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

const SideNav = (props: SideNavProps) => {
  const { version, setThemeVersion } = useThemeContextProvider();
  const [isExpanded, setIsExpanded] = useState(false);
  const { isSideNavOpen, setIsSideNavOpen } = props;

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "linear",
      },
    },
    closed: {
      opacity: 0,
      x: -100,
      width: 0,
      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <motion.nav
      className={`${CLASSES.root} ${CLASSES[version]}`}
      animate={isSideNavOpen ? "open" : "closed"}
      variants={variants}
      transition={{
        duration: 0.5,
      }}
    >
      <ul>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              Home
            </CustomAnchorButton>
            <CustomButton
              onClick={() => setIsExpanded((prevState) => !prevState)}
            >
              <FontAwesomeIcon icon={isExpanded ? faMinus : faAdd} />
            </CustomButton>
          </div>
          {isExpanded && (
            <div className={CLASSES.listItemInner}>
              <CustomButton
                onClick={() =>
                  setThemeVersion(version !== "dark" ? "dark" : "light")
                }
              >
                {version === "light" ? "dark" : "light"} Version
              </CustomButton>
            </div>
          )}
        </li>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/discography"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              Albums
            </CustomAnchorButton>
          </div>
        </li>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/live-shows"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              Live
            </CustomAnchorButton>
          </div>
        </li>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/about"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              About
            </CustomAnchorButton>
          </div>
        </li>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/gallery"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              Gallery
            </CustomAnchorButton>
          </div>
        </li>
        <li>
          <div className={CLASSES.listItemWrapper}>
            <CustomAnchorButton
              to="/contact"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
              Contact
            </CustomAnchorButton>
          </div>
        </li>
      </ul>
    </motion.nav>
  );
};

export default SideNav;
