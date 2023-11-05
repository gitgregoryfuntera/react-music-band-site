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

type TabHeader = {
  id: number;
  label: string;
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

  const galleryItems = useMemo(() => {
    const MEDIA_ASSETS = [
      {
        id: 1,
        image: img1,
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
        tags: ["videos"],
      },
      {
        id: 6,
        image: img6,
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
                <CustomButton customrootclass={CLASSES.btn}>
                  <img src={item.image} width={"100%"} />
                </CustomButton>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaContent;
