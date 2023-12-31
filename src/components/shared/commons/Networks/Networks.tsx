import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./Networks.module.scss";
import logo1 from "/assets/logo1.png";
import logo2 from "/assets/logo2.png";
import logo3 from "/assets/logo3.png";
import logo4 from "/assets/logo4.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useLocation } from "react-router-dom";
import {
  slideLeftVariant,
  slideUpVariant,
} from "@components/shared/animations/commonVariants";

const Networks = () => {
  const { version } = useThemeContextProvider();
  const location = useLocation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { variantKeys: variantSlideUpKeys, variants: variantsSlideUp } =
    slideUpVariant();
  const { variants: variantsSlideLeft } = slideLeftVariant();

  const SOCIAL_IMAGES = [logo1, logo2, logo3, logo4];
  return (
    <motion.section
      key={location.key}
      whileInView={variantSlideUpKeys.onscreen}
      initial={
        isDesktopOrLaptop
          ? variantSlideUpKeys.offscreen
          : variantSlideUpKeys.onscreen
      }
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variantsSlideUp} className={CLASSES.title}>
        <h2>Networks</h2>
        <p>
          Audio player software is used to play back sound recordings in one of
          the many formats available for computers today
        </p>
      </motion.div>
      <div className={CLASSES.row}>
        <div className={CLASSES.socialsContainer}>
          {SOCIAL_IMAGES.map((img, index) => (
            <motion.div key={`${img}-${index}`} variants={variantsSlideLeft}>
              <CustomCard className={CLASSES.socialCard}>
                <div className={CLASSES.imageContainer}>
                  <img src={img} />
                </div>
              </CustomCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={variantsSlideUp}
          className={CLASSES.contactInfoContainer}
        >
          <p>
            CONTACT <span>|</span> INFO@MUSIC.COM
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Networks;
