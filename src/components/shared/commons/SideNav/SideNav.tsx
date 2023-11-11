import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./SideNav.module.scss";
import { motion } from "framer-motion";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useLocation } from "react-router-dom";

interface SideNavProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

const SideNav = (props: SideNavProps) => {
  const { version } = useThemeContextProvider();
  const { pathname } = useLocation();
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
              {pathname === "/" && <div className={CLASSES.underline} />}
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
              {pathname === "/discography" && (
                <div className={CLASSES.underline} />
              )}
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
              {pathname === "/live-shows" && (
                <div className={CLASSES.underline} />
              )}
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
              {pathname === "/about" && <div className={CLASSES.underline} />}
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
              {pathname === "/gallery" && <div className={CLASSES.underline} />}
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
              {pathname === "/contact" && <div className={CLASSES.underline} />}
            </CustomAnchorButton>
          </div>
        </li>
      </ul>
    </motion.nav>
  );
};

export default SideNav;
