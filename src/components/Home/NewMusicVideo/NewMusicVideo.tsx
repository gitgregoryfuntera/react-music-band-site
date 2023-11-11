import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./NewMusicVideo.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion } from "framer-motion";
import PlayDialog from "../Dialogs/PlayDialog/PlayDialog";
import { scaleToOneVariant } from "@components/shared/animations/commonVariants";

const NewMusicVideo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [openPlayDialog, setOpenPlayDialog] = useState(false);
  const { variantKeys, variants } = scaleToOneVariant();
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.newMusicVideoContainer}>
        <div className={CLASSES.newMusicVideo}>
          <motion.div
            initial={
              isDesktopOrLaptop ? variantKeys.offscreen : variantKeys.onscreen
            }
            whileInView={variantKeys.onscreen}
            viewport={{ once: true }}
            variants={variants}
          >
            <div
              className={CLASSES.playIconContainer}
              onClick={() => setOpenPlayDialog((prevState) => !prevState)}
            >
              <FontAwesomeIcon icon={faPlay} size={"2x"} />
            </div>
            <h3>New Music Video</h3>
          </motion.div>
        </div>
      </div>
      <PlayDialog open={openPlayDialog} handleOpen={setOpenPlayDialog} />
    </section>
  );
};

export default NewMusicVideo;
