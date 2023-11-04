import CustomBanner from "@components/shared/customs/CustomBanner/CustomBanner";
import bannerImg from "/assets/live-shows/page-banner-live.jpg";

const Banner = () => {
  return (
    <section>
      <CustomBanner title="Live Shows" bannerImage={bannerImg} />
    </section>
  );
};

export default Banner;
