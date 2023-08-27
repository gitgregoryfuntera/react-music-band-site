import CLASSES from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderNav from "./HeaderNav";
import CustomButton from "@components/shared/commons/CustomButton/CustomButton";

const Header = () => {
  return (
    <header className={CLASSES.root}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.logoContainer}>
          <h1>Logo.</h1>
        </div>
        <HeaderNav />
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
