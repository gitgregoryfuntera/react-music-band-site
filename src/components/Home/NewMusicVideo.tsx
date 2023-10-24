import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./NewMusicVideo.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { Key, ReactNode, useState } from "react";
import { motion, Variants } from "framer-motion";
import PlayDialog from "@components/dialogs/PlayDialog/PlayDialog";

const SlideInMotionLeft = ({
  motionKey,
  children,
  isDesktopOrLaptop,
  className,
}: {
  motionKey: Key;
  children: ReactNode;
  isDesktopOrLaptop: boolean;
  className?: string;
}) => {
  const variants: Variants = {
    offscreen: {
      opacity: 0,
      scale: 0,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      key={motionKey}
      className={className}
      initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const NewMusicVideo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [openPlayDialog, setOpenPlayDialog] = useState(false);

  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.newMusicVideoContainer}>
        <div className={CLASSES.newMusicVideo}>
          <SlideInMotionLeft
            motionKey={"slideLeftMusic"}
            isDesktopOrLaptop={isDesktopOrLaptop}
          >
            <div
              className={CLASSES.playIconContainer}
              onClick={() => setOpenPlayDialog((prevState) => !prevState)}
            >
              <FontAwesomeIcon icon={faPlay} size={"2x"} />
            </div>
            <h3>New Music Video</h3>
          </SlideInMotionLeft>
        </div>
      </div>
      <PlayDialog open={openPlayDialog} handleOpen={setOpenPlayDialog} />
    </section>
  );
};

export default NewMusicVideo;
