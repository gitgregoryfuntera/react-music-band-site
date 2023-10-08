import CustomAnchorButton from "@components/shared/commons/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./ArtistBio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SlideInMotionRight = ({
  motionKey,
  children,
  isDesktopOrLaptop,
  className,
}: {
  motionKey: Key;
  children: ReactNode;
  isDesktopOrLaptop: boolean;
  className: string;
}) => {
  const animatedObj = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: "linear",
      duration: 1,
    },
  };
  const motionObj = isDesktopOrLaptop ? animatedObj : undefined;
  return (
    <motion.div key={motionKey} {...motionObj} className={className}>
      {children}
    </motion.div>
  );
};

const SlideInMotionLeft = ({
  motionKey,
  children,
  isDesktopOrLaptop,
  className,
}: {
  motionKey: Key;
  children: ReactNode;
  isDesktopOrLaptop: boolean;
  className: string;
}) => {
  const animatedObj = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    transition: {
      ease: "linear",
      duration: 1,
    },
  };
  const motionObj = isDesktopOrLaptop ? animatedObj : undefined;
  return (
    <motion.div key={motionKey} {...motionObj} className={className}>
      {children}
    </motion.div>
  );
};

const ArtistBio = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const rootScope = useRef(null);
  const isInView = useInView(rootScope);

  useEffect(() => {
    if (isInView) {
      setTriggerAnimation(true);
    }
  }, [isInView, triggerAnimation]);

  return (
    <section className={CLASSES.root} ref={rootScope}>
      <div className={CLASSES.row}>
        <AnimatePresence>
          {triggerAnimation && (
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
                  If I can play one note and make you cry, then that's better
                  than those fancy dancers playing twenty notes.
                </q>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, maxime ab facilis id explicabo accusantium doloremque
                  ad quod consectetur inventore sequi. Ad temporibus fugit
                  voluptates tempora perferendis sunt pariatur eveniet?
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
          )}
        </AnimatePresence>

        <AnimatePresence>
          {triggerAnimation && (
            <SlideInMotionRight
              motionKey={"rightScope"}
              isDesktopOrLaptop={isDesktopOrLaptop}
              className={CLASSES.artistImage}
            >
              <img src={`/src/assets/artist_bio_image.png`} />
            </SlideInMotionRight>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtistBio;
