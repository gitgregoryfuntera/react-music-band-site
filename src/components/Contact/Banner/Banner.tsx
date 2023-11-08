import CustomBanner from "@components/shared/customs/CustomBanner/CustomBanner";
import bannerImg from "/assets/discography/page-banner.jpg";

const Banner = () => {
  return (
    <section>
      <CustomBanner title={"Contact"} bannerImage={bannerImg} />
    </section>
  );
};

export default Banner;
