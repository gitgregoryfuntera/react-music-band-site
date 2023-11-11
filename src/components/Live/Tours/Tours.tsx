import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./Tours.module.scss";
import { faClock, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { slideUpVariant } from "@components/shared/animations/commonVariants";

const Tours = () => {
  const { version } = useThemeContextProvider();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const TOURS = [
    {
      id: 1,
      date: "20",
      month: "Jan",
      location: "Los Angles, USA",
      time: "11:45 PM",
    },
    {
      id: 2,
      date: "01",
      month: "Feb",
      location: "Los Angles, USA",
      time: "11:45 PM",
    },
    {
      id: 3,
      date: "12",
      month: "Mar",
      location: "Los Angles, USA",
      time: "11:45 PM",
    },
    {
      id: 4,
      date: "21",
      month: "Apr",
      location: "Los Angles, USA",
      time: "11:45 PM",
    },
  ];

  const { variantKeys, variants } = slideUpVariant()
  return (
    <motion.section
      whileInView={variantKeys.onscreen}
      initial={isDesktopOrLaptop ? variantKeys.offscreen : variantKeys.onscreen}
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <motion.div variants={variants} className={CLASSES.title}>
        <h2>New Album Tour {new Date().getFullYear()}</h2>
      </motion.div>
      <div className={CLASSES.tourListContainer}>
        {TOURS.map((tour) => (
          <motion.div
            variants={variants}
            className={CLASSES.tour}
            key={tour.id}
          >
            <div className={CLASSES.date}>
              <div className={CLASSES.calendar}>
                <h3>{tour.date}</h3>
                <p>{tour.month}</p>
              </div>
            </div>

            <div className={CLASSES.detail}>
              <h3>Amazing Live Show</h3>
              <p>Live show and album signing</p>
            </div>

            <div className={CLASSES.time}>
              <div className={CLASSES.item}>
                <span>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                <p>{tour.location}</p>
              </div>

              <div className={CLASSES.item}>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <p className={CLASSES.timestamp}>{tour.time}</p>
              </div>
            </div>

            <div className={CLASSES.action}>
              <CustomButton customrootclass={CLASSES.btn}>
                Buy Tickets
              </CustomButton>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tours;
