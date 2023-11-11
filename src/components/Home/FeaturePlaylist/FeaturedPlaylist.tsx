import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./FeaturedPlaylists.module.scss";
import image1 from "/assets/img4.jpg";
import image2 from "/assets/img5.jpg";
import image3 from "/assets/img6.jpg";
import image4 from "/assets/img7.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import {
  slideLeftVariant,
  slideUpVariant,
} from "@components/shared/animations/commonVariants";
import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";

const FeaturedPlaylist = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const FEATURED_PLAYLIST = [
    {
      image: image1,
      title: `Out Run Concept`,
      description: `History of Synth music, there is probably no one.`,
      link: "https://open.spotify.com/album/6w8mGg73sQl4QJEhpDUvpI?si=DJlyJ2sQR_qtSubKyvvb9Q",
    },
    {
      image: image2,
      title: `Out Run Concept`,
      description: `History of Synth music, there is probably no one.`,
      link: "https://open.spotify.com/album/6yiXkzHvC0OTmhfDQOEWtS?si=UE25-H30TXWX2W6JB8NY2g",
    },
    {
      image: image3,
      title: `Out Run Concept`,
      description: `History of Synth music, there is probably no one.`,
      link: "https://open.spotify.com/album/6r1lh7fHMB499vGKtIyJLy?si=vbv9p7NmSDesAFtALRUw1w",
    },
    {
      image: image4,
      title: `Out Run Concept`,
      description: `History of Synth music, there is probably no one.`,
      link: "https://open.spotify.com/album/1xJHno7SmdVtZAtXbdbDZp?si=Zb330j5NSDOKPeksmUqYQw",
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
        delayChildren: 0.5,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variantsSlideUp}>
        <h2>Featured Playlists</h2>
      </motion.div>
      <div className={CLASSES.cardContainer}>
        {FEATURED_PLAYLIST?.map((item, index) => (
          <motion.div
            variants={variantsSlideLeft}
            key={`${item.title}-${index}`}
            whileHover={{
              y: -20,
            }}
          >
            <CustomCard>
              <CustomAnchorButton to={item.link} target="_blank">
                <div className={CLASSES.playlistWrapper}>
                  <div className={CLASSES.imgContainer}>
                    <img src={item.image} />
                  </div>
                  <div className={CLASSES.messageContainer}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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

export default FeaturedPlaylist;
