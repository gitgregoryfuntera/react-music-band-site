import { motion, Variants } from "framer-motion";
import CLASSES from "./Album.module.scss";

const Album = () => {
  const variants: Variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.5,
      },
    },
    out: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.section
      whileInView={"in"}
      initial={"out"}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={CLASSES.root}
    >
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
