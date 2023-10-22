import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import banner1 from "/assets/banner1.jpg";
import banner2 from "/assets/banner2.jpg";
import CLASSES from "./HomeBanner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple } from "@fortawesome/free-brands-svg-icons";

import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import SpotifyPlayer from "./SpotifyPlayer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useState } from "react";

const HomeBanner = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const variants = {
    in: {
      opacity: [0, 1],
      x: [100, 0],
      transition: {
        x: {
          ease: "easeIn",
        },
      },
    },
    out: {
      x: [0, 100],
      opacity: [1, 0],
      transition: {
        x: {
          ease: "easeIn",
        },
      },
    },
  };

  return (
    <section>
      <div className={CLASSES.root}>
        <Swiper
          className={CLASSES.swiper}
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={isDesktopOrLaptop}
          pagination={!isDesktopOrLaptop}
          onSlideChange={({ activeIndex }) =>
            setCurrentActiveSlide(activeIndex)
          }
        >
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner1} />
              <div className={CLASSES.bannerTextContainer}>
                <motion.div
                  key={currentActiveSlide}
                  animate={currentActiveSlide === 0 ? "in" : "out"}
                  transition={{
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
                  }}
                >
                  <motion.h1 variants={variants}>New Album Out Now</motion.h1>
                  <motion.p variants={variants}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. has been the industry's standard dummy
                    text ever since.
                  </motion.p>
                  <motion.div
                    variants={variants}
                    className={CLASSES.buttonContainer}
                  >
                    <CustomButton
                      customrootclass={CLASSES.buttonWrapper}
                      customButtonClassType="gradientRound"
                    >
                      <FontAwesomeIcon
                        icon={faApple}
                        className={CLASSES.btnIcon}
                      />
                      Buy on Itunes
                    </CustomButton>
                    <CustomButton
                      customrootclass={CLASSES.buttonWrapper}
                      customButtonClassType="round"
                    >
                      <FontAwesomeIcon
                        icon={faSpotify}
                        className={CLASSES.btnIcon}
                      />
                      Listen on Spotify
                    </CustomButton>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner2} />
              <div className={CLASSES.bannerTextContainer}>
                <motion.div
                  key={currentActiveSlide}
                  animate={currentActiveSlide === 1 ? "in" : "out"}
                  transition={{
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
                  }}
                >
                  <motion.h1 variants={variants}>
                    Best artist of the year
                  </motion.h1>
                  <motion.p variants={variants}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. has been the industry's standard dummy
                    text ever since.
                  </motion.p>
                  <motion.div
                    className={CLASSES.buttonContainer}
                    variants={variants}
                  >
                    <CustomButton customrootclass={CLASSES.buttonWrapper}>
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className={CLASSES.btnIcon}
                      />
                      New Album
                    </CustomButton>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {isDesktopOrLaptop && (
        <div className={CLASSES.spotifyPlayer}>
          <SpotifyPlayer />
        </div>
      )}
    </section>
  );
};

export default HomeBanner;
