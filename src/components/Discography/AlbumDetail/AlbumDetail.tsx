import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./AlbumDetail.module.scss";
import singleAlbumImg from "/assets/discography/single-album.png";
import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import { useLocation } from "react-router-dom";

const AlbumDetail = () => {
  const location = useLocation();
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
    <motion.section
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
      <div className={CLASSES.content}>
        <motion.div variants={variants} className={CLASSES.title}>
          <h2>New - Cyber Rad EP</h2>
        </motion.div>

        <motion.div variants={variants} className={CLASSES.detail}>
          <h2>
            The second full-length release for the Australian trio was recorded
            in Los Angeles with producer Lars Stalfors.
          </h2>
          <p>
            An album loaded with electronic rhythms combined with dark bass
            lines, capable of generating the tensest moments and sonic darkness,
            thus recreating a truly haunting atmosphere. Visionary marks a new
            era for Nightcrawler, in which the Synthwave style that made him so
            well-known stops being the main canvas in his compositions to become
            just another colour in his new creative palette, made of new musical
            influences such as nightclub music, synthpop or darkwave. By doing
            so, he manages to develop a new sound that makes way for bolder and
            more experimental productions.
          </p>
        </motion.div>
        <motion.div variants={variants} className={CLASSES.albumImgContainer}>
          <img src={singleAlbumImg} width={"100%"} />
        </motion.div>

        <div className={CLASSES.anchorContainer}>
          <CustomAnchorButton
            customrootclass={CLASSES.anchor}
            to={location?.pathname}
          >
            Buy the vinyl
          </CustomAnchorButton>
        </div>
      </div>
    </motion.section>
  );
};

export default AlbumDetail;
