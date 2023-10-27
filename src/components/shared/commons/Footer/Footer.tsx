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
              to="http://preview.themeforest.net/item/vyrva-music-band-musician-template/full_screen_preview/46935654?_ga=2.125948941.1471238601.1692440368-1395985756.1609849438&_gac=1.154807882.1692275436.CjwKCAjwivemBhBhEiwAJxNWNw-Q0ykQH5JE2T5ZZ0j9rFNuxmyqZ8FA4O7RTGAaUCQW7xtwku42RRoCXL4QAvD_BwE"
            >
              website
            </CustomAnchorButton>
          </div>
        </div>
        <div className={CLASSES.socialsContainer}>
          <CustomAnchorButton to="/react-music-band-site/">
            <FontAwesomeIcon icon={faXTwitter} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/react-music-band-site/">
            <FontAwesomeIcon icon={faThreads} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/react-music-band-site/">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
          </CustomAnchorButton>
          <CustomAnchorButton to="/react-music-band-site/">
            <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
          </CustomAnchorButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
