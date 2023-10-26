import CLASSES from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderNav from "./HeaderNav";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

interface HeaderProps {
  setIsSideNavOpen: (prop: boolean) => void;
  isSideNavOpen: boolean;
}

const Header = (props: HeaderProps) => {
  const { version } = useThemeContextProvider();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const { setIsSideNavOpen, isSideNavOpen } = props;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isFadeIn = scrollPosition > 50;

  return (
    <header
      className={`${CLASSES.root} ${isFadeIn ? `${CLASSES.fadeIn}` : ""} ${
        CLASSES[version]
      }`}
    >
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.logoContainer}>
          <h1>Logo.</h1>
        </div>
        <HeaderNav isFadeIn={isFadeIn} />
        {isDesktopOrLaptop ? (
          <div className={CLASSES.menuContainer} /> //spacer
        ) : (
          <div className={CLASSES.menuContainer}>
            <CustomButton onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
              <FontAwesomeIcon
                className={CLASSES.barIcon}
                icon={isSideNavOpen ? faXmark : faBars}
              />
            </CustomButton>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
