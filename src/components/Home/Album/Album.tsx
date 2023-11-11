import { motion } from "framer-motion";
import CLASSES from "./Album.module.scss";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { slideUpVariant } from "@components/shared/animations/commonVariants";

const Album = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { variantKeys, variants } = slideUpVariant();
  const { offscreen, onscreen } = variantKeys;

  return (
    <motion.section
      whileInView={onscreen}
      initial={isDesktopOrLaptop ? offscreen : onscreen}
      viewport={{
        once: true,
        amount: 0.5
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      {!isDesktopOrLaptop && (
        <div className={CLASSES.musicPlayer}>
          <MusicPlayer />
        </div>
      )}

      <motion.h2 variants={variants}>New Album</motion.h2>
      <motion.div variants={variants} className={CLASSES.spotifyEmbed}>
        <iframe
          src="https://open.spotify.com/embed/album/0SgxFNwplcpKZTSRhh2Snh?utm_source=generator"
          allowFullScreen
          allow={
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }
          loading="lazy"
        ></iframe>
      </motion.div>
      <div className={CLASSES.albumMessage}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime,
          illo.
        </p>
      </div>
    </motion.section>
  );
};

export default Album;
