import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./FeaturedPlaylists.module.scss";
import image1 from "/assets/img4.jpg";
import image2 from "/assets/img5.jpg";
import image3 from "/assets/img6.jpg";
import image4 from "/assets/img7.jpg";
import { Variants, motion } from "framer-motion";

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

const FEATURED_PLAYLIST = [
  {
    image: image1,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image2,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image3,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image4,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
];

const FeaturedPlaylist = () => {
  return (
    <motion.section
      whileInView={"in"}
      initial={"out"}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }}
      className={CLASSES.root}
    >
      <motion.div variants={variants}>
        <h2>Featured Playlists</h2>
      </motion.div>
      <div className={CLASSES.cardContainer}>
        {FEATURED_PLAYLIST?.map((item) => (
          <motion.div variants={variantsSlideIn}>
            <CustomCard>
              <div className={CLASSES.playlistWrapper}>
                <div className={CLASSES.imgContainer}>
                  <img src={item.image} />
                </div>
                <div className={CLASSES.messageContainer}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </CustomCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedPlaylist;
