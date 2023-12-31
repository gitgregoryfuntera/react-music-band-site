import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./List.module.scss";
import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";

import cardImg1 from "/assets/discography/list/image1.jpg";
import cardImg2 from "/assets/discography/list/image2.jpg";
import cardImg3 from "/assets/discography/list/image3.jpg";
import cardImg4 from "/assets/discography/list/image4.jpg";
import cardImg5 from "/assets/discography/list/image5.jpg";
import cardImg6 from "/assets/discography/list/image6.jpg";

import { motion } from "framer-motion";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useMediaQuery } from "react-responsive";
import {
  slideLeftVariant,
  slideUpVariant,
} from "@components/shared/animations/commonVariants";

const List = () => {
  const { version } = useThemeContextProvider();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const ITEM_LIST = [
    {
      id: 1,
      image: cardImg1,
      message: {
        title: "Lost in the World",
        subtitle: "Cyber Rad",
      },
    },
    {
      id: 2,
      image: cardImg2,
      message: {
        title: "Red Avalon",
        subtitle: "Cyber Rad",
      },
    },
    {
      id: 3,
      image: cardImg3,
      message: {
        title: "Symmetry",
        subtitle: "Cyber Rad",
      },
    },
    {
      id: 4,
      image: cardImg4,
      message: {
        title: "Dynamic Energy",
        subtitle: "Cyber Rad",
      },
    },
    {
      id: 5,
      image: cardImg5,
      message: {
        title: "Written in the Stars",
        subtitle: "Cyber Rad",
      },
    },
    {
      id: 6,
      image: cardImg6,
      message: {
        title: "Glodymary",
        subtitle: "Cyber Rad",
      },
    },
  ];

  const { variantKeys: variantSlideUpKeys, variants: variantsSlideUp } =
    slideUpVariant();
  const { variants: variantsSlideLeft } = slideLeftVariant();
  return (
    <motion.section
      whileInView={variantSlideUpKeys.onscreen}
      initial={
        isDesktopOrLaptop
          ? variantSlideUpKeys.offscreen
          : variantSlideUpKeys.onscreen
      }
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variantsSlideUp} className={CLASSES.titleContainer}>
        <h2>Discography</h2>
      </motion.div>
      <div className={CLASSES.row}>
        {ITEM_LIST.map((item) => (
          <motion.div variants={variantsSlideLeft}>
            <CustomCard customrootclass={CLASSES.card} key={item.id}>
              <CustomAnchorButton to={`/discography/${item.id}`}>
                <div className={CLASSES.cardContent}>
                  <motion.div
                    className={CLASSES.imgContainer}
                    whileHover={{
                      y: -25,
                    }}
                  >
                    <img src={item.image} />
                  </motion.div>
                  <div className={CLASSES.messageContainer}>
                    <h3>{item.message.title}</h3>
                    <p>{item.message.subtitle}</p>
                  </div>
                </div>
              </CustomAnchorButton>
            </CustomCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default List;
