import CLASSES from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderNav from "./HeaderNav";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useEffect, useState } from "react";

interface HeaderProps {
  setIsSideNavOpen: (prop: boolean) => void;
  isSideNavOpen: boolean;
}

const Header = (props: HeaderProps) => {
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
      className={`${CLASSES.root} ${isFadeIn ? `${CLASSES.fadeIn}` : ""}`}
    >
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.logoContainer}>
          <h1>Logo.</h1>
        </div>
        <HeaderNav isFadeIn={isFadeIn} />
        <div className={CLASSES.menuContainer}>
          <CustomButton onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
            <FontAwesomeIcon
              className={CLASSES.barIcon}
              icon={isSideNavOpen ? faXmark : faBars}
            />
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
