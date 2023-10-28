import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./Networks.module.scss";
import logo1 from "/assets/logo1.png";
import logo2 from "/assets/logo2.png";
import logo3 from "/assets/logo3.png";
import logo4 from "/assets/logo4.png";

import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

const variants: Variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
    },
  },
  out: {
    opacity: 0,
    y: 100,
  },
};

const variantsSlideIn: Variants = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
    },
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

const SOCIAL_IMAGES = [logo1, logo2, logo3, logo4];

const Networks = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <motion.section
      whileInView={"in"}
      initial={isDesktopOrLaptop ? "out" : "in"}
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variants} className={CLASSES.title}>
        <h2>Networks</h2>
        <p>
          Audio player software is used to play back sound recordings in one of
          the many formats available for computers today
        </p>
      </motion.div>
      <div className={CLASSES.row}>
        <div className={CLASSES.socialsContainer}>
          {SOCIAL_IMAGES.map((img, index) => (
            <motion.div variants={variantsSlideIn} key={`${img}-${index}`}>
              <CustomCard className={CLASSES.socialCard}>
                <div className={CLASSES.imageContainer}>
                  <img src={img} />
                </div>
              </CustomCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={variants}
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
