import bannerImg from "/assets/discography/page-banner.jpg";
import CustomBanner from "@components/shared/customs/CustomBanner/CustomBanner";

const Banner = () => {
  return (
    <section>
      <CustomBanner title="Discography" bannerImage={bannerImg} />
    </section>
  );
};

export default Banner;
