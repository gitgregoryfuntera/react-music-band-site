import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import CLASSES from "./HomeBanner.module.scss";

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores odio assumenda ab in laboriosam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={CLASSES.swiperSlide}>
            <div className={CLASSES.sliderContainer}>
              <img src={banner2} />
              <div className={CLASSES.bannerTextContainer}>
                <h1>Best artist of the year</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores odio assumenda ab in laboriosam. Mollitia
                  repudiandae, temporibus voluptatem assumenda sequi sapiente
                  nam quas veritatis sed earum. A dolores voluptatem dolore?
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
