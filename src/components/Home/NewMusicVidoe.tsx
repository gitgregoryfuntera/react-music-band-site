import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./NewMusicView.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
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
  const animatedObj = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
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

const NewMusicVideo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const rootScope = useRef(null);
  const isInView = useInView(rootScope);
  const [openPlayDialog, setOpenPlayDialog] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTriggerAnimation(true);
    }
  }, [isInView, triggerAnimation]);

  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.newMusicVideoContainer}>
        <div className={CLASSES.newMusicVideo} ref={rootScope}>
          {triggerAnimation && (
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
          )}
        </div>
      </div>
      <PlayDialog open={openPlayDialog} handleOpen={setOpenPlayDialog} />
    </section>
  );
};

export default NewMusicVideo;
