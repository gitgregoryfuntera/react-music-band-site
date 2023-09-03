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

const HomeBanner = () => {
  return (
    <section>
      <div className={CLASSES.root}>
        <Swiper
          className={CLASSES.swiper}
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination
        >
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner1} />
              <div className={CLASSES.bannerTextContainer}>
                <h1>New Album Out Now</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore reprehenderit expedita repudiandae possimus?
                </p>
                <div className={CLASSES.buttonContainer}>
                  <CustomButton
                    customRootClass={CLASSES.buttonWrapper}
                    customButtonClassType="gradientRound"
                  >
                    <FontAwesomeIcon
                      icon={faApple}
                      className={CLASSES.btnIcon}
                    />
                    Buy on Itunes
                  </CustomButton>
                  <CustomButton
                    customRootClass={CLASSES.buttonWrapper}
                    customButtonClassType="round"
                  >
                    <FontAwesomeIcon
                      icon={faSpotify}
                      className={CLASSES.btnIcon}
                    />
                    Listen on Spotify
                  </CustomButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner2} />
              <div className={CLASSES.bannerTextContainer}>
                <h1>Best artist of the year</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className={CLASSES.buttonContainer}>
                  <CustomButton customRootClass={CLASSES.buttonWrapper}>
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className={CLASSES.btnIcon}
                    />
                    New Album
                  </CustomButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
