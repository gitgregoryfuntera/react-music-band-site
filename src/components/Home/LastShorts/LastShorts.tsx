import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./LastShorts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import {
  slideLeftVariant,
  slideRightVariant,
  slideUpVariant,
} from "@components/shared/animations/commonVariants";

const LastShorts = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { variantKeys: variantSlideUpKeys, variants: variantsSlideUp } =
    slideUpVariant();
  const { variants: variantsSlideLeft } = slideLeftVariant();
  const { variants: variantsSlideRight } = slideRightVariant();

  const LAST_SHORTS = [
    {
      link: `https://www.youtube.com/embed/Lssi0T6rHEo`,
      title: `Aggressive Dark Electro Mix | Dark Techno | Cyberpunk | Industrial Mix Music [ Copyright Free ]`,
      description: {
        title: `Rainy Night`,
        message: `History of Synth music, there is probably no one.`,
      },
      animation: variantsSlideLeft,
    },
    {
      link: `https://www.youtube.com/embed/J4lknAwyyWs`,
      title: `The ending we desired | Cyberpunk Edgerunners | #anime #amv #shorts #cyberpunk2077 #music #watch`,
      description: {
        title: `Landscape`,
        message: `History of Synth music, there is probably no one.`,
      },
      animation: variantsSlideUp,
    },
    {
      link: `https://www.youtube.com/embed/hkLEdSjlqXQ`,
      title: `Best Ambient Cyberpunk Mix | Dystopian Atmospheric Sci-Fi Music for Blade Runners`,
      description: {
        title: `Cyborg Life`,
        message: `History of Synth music, there is probably no one.`,
      },
      animation: variantsSlideRight,
    },
  ];

  return (
    <motion.section
      whileInView={variantSlideUpKeys.onscreen}
      initial={
        isDesktopOrLaptop
          ? variantSlideUpKeys.offscreen
          : variantSlideUpKeys.onscreen
      }
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variantsSlideUp} className={CLASSES.title}>
        <h2>Last shorts</h2>
      </motion.div>
      <div className={CLASSES.shortContainer}>
        {LAST_SHORTS?.map((item) => (
          <motion.div variants={item.animation} key={item.link}>
            <CustomCard>
              <div className={CLASSES.cardContent}>
                <iframe
                  width="366"
                  height="660"
                  src={item.link}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder={0}
                />
                <div className={CLASSES.descriptionContainer}>
                  <h3>{item.description.title}</h3>
                  <p>{item.description.message}</p>
                </div>
                <div className={CLASSES.socialsContainer}>
                  <CustomAnchorButton to="/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      color="gray"
                    />
                  </CustomAnchorButton>
                  <CustomAnchorButton to="/">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="gray" />
                  </CustomAnchorButton>
                </div>
              </div>
            </CustomCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LastShorts;
