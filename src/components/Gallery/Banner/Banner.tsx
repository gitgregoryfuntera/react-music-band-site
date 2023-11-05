import CustomBanner from "@components/shared/customs/CustomBanner/CustomBanner";
import bannerImg from "/assets/gallery/page-banner.jpg";

const Banner = () => {
  return (
    <section>
      <CustomBanner title={"Gallery"} bannerImage={bannerImg} />
    </section>
  );
};

export default Banner;
