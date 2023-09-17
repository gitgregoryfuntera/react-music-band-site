import CLASSES from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderNav from "./HeaderNav";
import CustomButton from "@components/shared/commons/CustomButton/CustomButton";
import { useEffect, useState } from "react";

const Header = () => {
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
    <header className={`${CLASSES.root} ${isFadeIn ? `${CLASSES.fadeIn}` : ''}`}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.logoContainer}>
          <h1>Logo.</h1>
        </div>
        <HeaderNav isFadeIn={isFadeIn}/>
        <div className={CLASSES.menuContainer}>
          <CustomButton>
            <FontAwesomeIcon className={CLASSES.barIcon} icon={faBars} />
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
