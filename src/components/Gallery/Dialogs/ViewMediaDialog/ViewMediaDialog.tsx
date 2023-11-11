import CustomPortal from "@components/shared/customs/CustomPortal/CustomPortal";
import CLASSES from "./ViewMediaDialog.module.scss";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Media } from "@components/Gallery/MediaContent/MediaContent";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  slideLeftVariant,
  slideRightVariant,
} from "@components/shared/animations/commonVariants";

interface ViewMediaDialogProps {
  open: boolean;
  handleOpen: (open: boolean) => void;
  media: Media | null;
  setSelectedMedia: (media: Media | null) => void;
  galleryItems: Media[];
}

const ViewMediaDialog = (props: ViewMediaDialogProps) => {
  const { open, handleOpen, media, setSelectedMedia, galleryItems } = props;
  const [slideDirection, setSlideDirection] = useState("right");

  const handleOnPrev = () => {
    const currentIdx = galleryItems.findIndex((item) => item.id === media?.id);
    const prevMediaIdx = currentIdx - 1;
    const prevMedia = galleryItems[prevMediaIdx];
    setSelectedMedia(
      prevMedia ? prevMedia : galleryItems[galleryItems.length - 1],
    );
    setSlideDirection("left");
  };

  const handleOnNext = () => {
    const currentIdx = galleryItems.findIndex((item) => item.id === media?.id);
    const nextMediaIdx = currentIdx + 1;
    const nextMedia = galleryItems[nextMediaIdx];
    setSelectedMedia(nextMedia ? nextMedia : galleryItems[0]);
    setSlideDirection("right");
  };

  const { variants: variantsSlideLeft } = slideLeftVariant();
  const { variants: variantsSlideRight } = slideRightVariant();

  return (
    <>
      {open && (
        <CustomPortal>
          <dialog className={CLASSES.root} open>
            <div className={CLASSES.wrapper}>
              <div className={CLASSES.header}>
                <CustomButton
                  onClick={() => {
                    handleOpen(false);
                    setSelectedMedia(null);
                  }}
                >
                  <FontAwesomeIcon icon={faClose} size={"2x"} />
                </CustomButton>
              </div>
              <motion.div
                key={media?.id}
                variants={
                  slideDirection === "right"
                    ? variantsSlideLeft
                    : variantsSlideRight
                }
                whileInView={"onscreen"}
                initial={"offscreen"}
                className={CLASSES.content}
              >
                {media?.tags.includes("videos") ? (
                  <div className={CLASSES.mediaContainer}>
                    <iframe
                      width="100%"
                      height="550"
                      src={media.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className={CLASSES.mediaContainer}>
                    <img src={media?.image} width={"100%"} />
                  </div>
                )}
              </motion.div>

              <div className={CLASSES.btnContainer}>
                <div className={CLASSES.btnActions}>
                  <CustomButton onClick={handleOnPrev}>
                    <FontAwesomeIcon icon={faChevronLeft} size={"2x"} />
                  </CustomButton>
                  <CustomButton onClick={handleOnNext}>
                    <FontAwesomeIcon icon={faChevronRight} size={"2x"} />
                  </CustomButton>
                </div>
              </div>
            </div>
          </dialog>
        </CustomPortal>
      )}
    </>
  );
};

export default ViewMediaDialog;
