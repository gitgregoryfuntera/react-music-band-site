import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./ArtistBio.module.scss";
import aboutImg from "/assets/about/about-img.jpg";
import { useMediaQuery } from "react-responsive";
import { Variants, motion } from "framer-motion";

const ArtistBio = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const variants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      whileInView={"onscreen"}
      initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <div className={CLASSES.content}>
        <motion.div variants={variants} className={CLASSES.title}>
          <h2>Artist Bio</h2>
        </motion.div>
        <div className={CLASSES.message}>
          <motion.p variants={variants}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </motion.p>
          <motion.p variants={variants}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words,
          </motion.p>

          <motion.img variants={variants} src={aboutImg} width={"100%"} />

          <motion.h3 variants={variants}>
            During the last years, I've been working on different music
            producers, musicians and music labels.
          </motion.h3>

          <motion.p variants={variants}>
            AB Music Agency Abertay Records Albion Music Alfa Doors Algo
            Balhousie Care Howies Music Leisure & Culture Dundee Live Active Mac
            Woards Macnabs Law Malcolm Music Nice Booking Riverman Royal
            Scottish Geographical Society Royal Scottish National Orchestra
            Zebra2 Envato
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default ArtistBio;
