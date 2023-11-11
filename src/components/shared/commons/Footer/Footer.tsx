import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "../Footer/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={CLASSES.root}>
      <div className={CLASSES.row}>
        <div className={CLASSES.contentContainer}>
          <p>Created By Greg Funtera</p>
          <div className={CLASSES.reference}>
            Reference{" "}
            <CustomAnchorButton
              customrootclass={CLASSES.website}
              target="_blank"
              to="https://themeforest.net/item/vyrva-music-band-musician-template/46935654"
            >
              website
            </CustomAnchorButton>
          </div>
        </div>
        <div className={CLASSES.socialsContainer}>
          <CustomAnchorButton to="/">
            <FontAwesomeIcon icon={faXTwitter} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/">
            <FontAwesomeIcon icon={faThreads} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/">
            <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
          </CustomAnchorButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
