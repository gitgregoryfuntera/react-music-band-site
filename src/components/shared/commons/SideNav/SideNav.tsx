import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./SideNav.module.scss";
import { motion } from "framer-motion";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

interface SideNavProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

const SideNav = (props: SideNavProps) => {
  const { version } = useThemeContextProvider();
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
          </div>
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
