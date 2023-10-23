import { motion, Variants } from "framer-motion";
import CLASSES from "./Album.module.scss";

const Album = () => {
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
        duration: 0.5,
      },
    },
  };

  return (
    <section className={CLASSES.root}>
      <motion.h2
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.8 }}
        variants={variants}
      >New Album</motion.h2>
      <div className={CLASSES.spotifyEmbed}>
        <iframe
          src="https://open.spotify.com/embed/album/0SgxFNwplcpKZTSRhh2Snh?utm_source=generator"
          allowFullScreen
          allow={
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }
          loading="lazy"
        ></iframe>
      </div>
      <div className={CLASSES.albumMessage}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime,
          illo.
        </p>
      </div>
    </section>
  );
};

export default Album;
