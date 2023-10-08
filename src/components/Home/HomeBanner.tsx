import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import CLASSES from "./HomeBanner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple } from "@fortawesome/free-brands-svg-icons";

import CustomButton from "@components/shared/commons/CustomButton/CustomButton";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import SpotifyPlayer from "./SpotifyPlayer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { Key, ReactNode, useState } from "react";

const SlideInMotion = ({
  motionKey,
  children,
}: {
  motionKey: Key;
  children: ReactNode;
}) => (
  <motion.div
    key={motionKey}
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);

const HomeBanner = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

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
                <SlideInMotion motionKey={currentActiveSlide}>
                  <h1>New Album Out Now</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <div className={CLASSES.buttonContainer}>
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
                  </div>
                </SlideInMotion>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner2} />
              <div className={CLASSES.bannerTextContainer}>
                <SlideInMotion motionKey={currentActiveSlide}>
                  <h1>Best artist of the year</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className={CLASSES.buttonContainer}>
                    <CustomButton customrootclass={CLASSES.buttonWrapper}>
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className={CLASSES.btnIcon}
                      />
                      New Album
                    </CustomButton>
                  </div>
                </SlideInMotion>
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
