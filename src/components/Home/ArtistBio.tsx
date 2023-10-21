import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./ArtistBio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Key, ReactNode } from "react";

const SlideInMotionRight = ({
  motionKey,
  children,
  className,
  isDesktopOrLaptop,
}: {
  motionKey: Key;
  children: ReactNode;
  className: string;
  isDesktopOrLaptop: boolean;
}) => {
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      key={motionKey}
      className={className}
      initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const SlideInMotionLeft = ({
  motionKey,
  children,
  className,
  isDesktopOrLaptop,
}: {
  motionKey: Key;
  children: ReactNode;
  isDesktopOrLaptop: boolean;
  className: string;
}) => {
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      key={motionKey}
      className={className}
      initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const ArtistBio = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.row}>
        <AnimatePresence>
          <SlideInMotionLeft
            motionKey={"slideLeft"}
            isDesktopOrLaptop={isDesktopOrLaptop}
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
              <CustomAnchorButton>
                <FontAwesomeIcon icon={faXTwitter} />
              </CustomAnchorButton>
              <CustomAnchorButton>
                <FontAwesomeIcon icon={faThreads} />
              </CustomAnchorButton>
              <CustomAnchorButton>
                <FontAwesomeIcon icon={faFacebookF} />
              </CustomAnchorButton>
              <CustomAnchorButton>
                <FontAwesomeIcon icon={faInstagram} />
              </CustomAnchorButton>
            </div>
          </SlideInMotionLeft>
        </AnimatePresence>

        <AnimatePresence>
          <SlideInMotionRight
            isDesktopOrLaptop={isDesktopOrLaptop}
            motionKey={"rightScope"}
            className={CLASSES.artistImage}
          >
            <img src={`/assets/artist_bio_image.png`} />
          </SlideInMotionRight>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtistBio;
