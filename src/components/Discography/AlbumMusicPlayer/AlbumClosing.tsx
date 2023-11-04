import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import CLASSES from "./AlbumClosing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const AlbumClosing = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      whileInView={"onscreen"}
      initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variants} className={CLASSES.messageContainer}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry's standard dummy
        </p>
      </motion.div>
      <motion.div variants={variants} className={CLASSES.btnContainer}>
        <CustomButton
          customrootclass={`${CLASSES.btn} ${CLASSES.apple}`}
          customButtonClassType="round"
        >
          <div className={CLASSES.btnLabel}>
            <FontAwesomeIcon icon={faApple} />
            <p>Buy on Itunes</p>
          </div>
        </CustomButton>
        <CustomButton
          customrootclass={CLASSES.btn}
          customButtonClassType="round"
        >
          <div className={CLASSES.btnLabel}>
            <FontAwesomeIcon icon={faSpotify} />
            <p>Listen on Spotify</p>
          </div>
        </CustomButton>
      </motion.div>
    </motion.div>
  );
};

export default AlbumClosing;
