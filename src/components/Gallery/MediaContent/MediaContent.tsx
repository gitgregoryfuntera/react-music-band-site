import { useMemo, useState } from "react";
import CLASSES from "./MediaContent.module.scss";

import { motion, Variants } from "framer-motion";

import img1 from "/assets/gallery/media/gallery1.jpg";
import img2 from "/assets/gallery/media/gallery2.jpg";
import img3 from "/assets/gallery/media/gallery3.jpg";
import img4 from "/assets/gallery/media/gallery4.jpg";
import img5 from "/assets/gallery/media/gallery5.jpg";
import img6 from "/assets/gallery/media/gallery6.jpg";

import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import ViewMediaDialog from "../Dialogs/ViewMediaDialog/ViewMediaDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPlay } from "@fortawesome/free-solid-svg-icons";

type TabHeader = {
  id: number;
  label: string;
};

export type Media = {
  id: number;
  image: string;
  video?: string;
  tags: string[];
};

const MediaContent = () => {
  const { version } = useThemeContextProvider();
  const TAB_HEADERS = [
    {
      id: 1,
      label: "All Media",
    },
    {
      id: 2,
      label: " Live Shows",
    },
    {
      id: 3,
      label: "Photos",
    },
    {
      id: 4,
      label: "Videos",
    },
  ];

  const [selectedTabHeader, setSelectedTabHeader] = useState<TabHeader>(
    TAB_HEADERS[0],
  );

  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [open, setOpen] = useState(false);

  const galleryItems = useMemo(() => {
    const MEDIA_ASSETS = [
      {
        id: 1,
        image: img1,
        video: "https://www.youtube.com/embed/aJOTlE1K90k?si=JH3C6tnmKz0vF95D",
        tags: ["live-shows", "videos"],
      },
      {
        id: 2,
        image: img2,
        tags: ["photos"],
      },
      {
        id: 3,
        image: img3,
        video: "https://www.youtube.com/embed/m5boL6y--yU?si=S0mpH5Syh3M4md3y",
        tags: ["live-shows"],
      },
      {
        id: 4,
        image: img4,
        tags: ["photos"],
      },
      {
        id: 5,
        image: img5,
        video: "https://www.youtube.com/embed/psuRGfAaju4?si=GZAtRx6Q2s883sUR",
        tags: ["videos"],
      },
      {
        id: 6,
        image: img6,
        video: "https://www.youtube.com/embed/F90Cw4l-8NY?si=oKj1EdJ6KFhftGDO",
        tags: ["live-shows", "videos"],
      },
    ];
    if (selectedTabHeader.id === 2) {
      return MEDIA_ASSETS.filter((media) =>
        media.tags.includes("live-shows"),
      ).sort((mediaA, mediaB) => mediaA.id - mediaB.id);
    }

    if (selectedTabHeader.id === 3) {
      return MEDIA_ASSETS.filter((media) => media.tags.includes("photos")).sort(
        (mediaA, mediaB) => mediaA.id - mediaB.id,
      );
    }

    if (selectedTabHeader.id === 4) {
      return MEDIA_ASSETS.filter((media) => media.tags.includes("videos")).sort(
        (mediaA, mediaB) => mediaA.id - mediaB.id,
      );
    }

    return MEDIA_ASSETS.sort((mediaA, mediaB) => mediaA.id - mediaB.id);
  }, [selectedTabHeader.id]);

  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
      scale: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.content}>
        <ul className={CLASSES.tabHeader}>
          {TAB_HEADERS.map((tabHeader) => (
            <li key={tabHeader.id}>
              <CustomButton
                customrootclass={`${CLASSES.btn} ${
                  tabHeader.id === selectedTabHeader.id ? CLASSES.selected : ""
                }`}
                onClick={() => setSelectedTabHeader(tabHeader)}
              >
                <p>{tabHeader.label}</p>
                {tabHeader.id === selectedTabHeader.id ? (
                  <motion.div
                    className={CLASSES.underline}
                    layoutId="underline"
                  />
                ) : null}
              </CustomButton>
            </li>
          ))}
        </ul>

        <div className={CLASSES.tabContent}>
          <motion.div
            key={`${selectedTabHeader.id}`}
            initial={"offscreen"}
            whileInView={"onscreen"}
            className={CLASSES.items}
            viewport={{
              once: true,
            }}
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.2,
            }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={`${item.id}`}
                className={CLASSES.item}
                variants={variants}
              >
                <CustomButton
                  customrootclass={CLASSES.btn}
                  onClick={() => {
                    setOpen(true);
                    setSelectedMedia(item);
                  }}
                >
                  <div className={CLASSES.btnOverlay} />

                  <motion.div
                    whileHover={{
                      y: -20,
                    }}
                    className={CLASSES.overlayIcon}
                  >
                    <FontAwesomeIcon
                      icon={item.tags.includes("videos") ? faPlay : faAdd}
                      size={"6x"}
                    />
                  </motion.div>
                  <img src={item.image} width={"100%"} />
                </CustomButton>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <ViewMediaDialog
        open={open}
        handleOpen={setOpen}
        media={selectedMedia}
        setSelectedMedia={setSelectedMedia}
        galleryItems={galleryItems}
      />
    </section>
  );
};

export default MediaContent;
