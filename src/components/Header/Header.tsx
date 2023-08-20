import CLASSES from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../shared/commons/CustomButton/CustomButton";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={CLASSES.root}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.logoContainer}>
          <h1>Logo.</h1>
        </div>
        <Navigation />
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
