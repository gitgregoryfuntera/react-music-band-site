import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./ArtistBio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import artistBioImg from "/assets/artist_bio_image.png";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import {
  slideLeftVariant,
  slideRightVariant,
} from "@components/shared/animations/commonVariants";

const ArtistBio = () => {
  const { version } = useThemeContextProvider();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { variantKeys: variantKeysLeft, variants: variantsLeft } =
    slideLeftVariant();
  const { variants: variantsRight } = slideRightVariant();

  return (
    <motion.section
      initial={
        isDesktopOrLaptop ? variantKeysLeft.offscreen : variantKeysLeft.onscreen
      }
      whileInView={variantKeysLeft.onscreen}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      transition={{
        staggerChildren: 0,
        delayChildren: 0,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <div className={CLASSES.row}>
        <motion.div
          variants={variantsLeft}
          className={CLASSES.artistBioContainer}
        >
          <div className={CLASSES.title}>
            <h2>Artist Bio</h2>
          </div>
          <div className={CLASSES.bioContent}>
            <q>
              If I can play one note and make you cry, then that's better than
              those fancy dancers playing twenty notes.
            </q>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              maxime ab facilis id explicabo accusantium doloremque ad quod
              consectetur inventore sequi. Ad temporibus fugit voluptates
              tempora perferendis sunt pariatur eveniet?
            </p>
          </div>

          <div className={CLASSES.bioSocials}>
            <CustomAnchorButton to="/">
              <FontAwesomeIcon icon={faXTwitter} />
            </CustomAnchorButton>
            <CustomAnchorButton to="/">
              <FontAwesomeIcon icon={faThreads} />
            </CustomAnchorButton>
            <CustomAnchorButton to="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </CustomAnchorButton>
            <CustomAnchorButton to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </CustomAnchorButton>
          </div>
        </motion.div>

        <motion.div variants={variantsRight} className={CLASSES.artistImage}>
          <img src={artistBioImg} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ArtistBio;
