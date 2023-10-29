import CustomBanner from "@components/shared/customs/CustomBanner/CustomBanner";
import bannerImg from "/assets/discography/page-banner2.jpg";

const AlbumBanner = () => {
  return (
    <section>
      <CustomBanner title="New Album" bannerImage={bannerImg} />
    </section>
  );
};

export default AlbumBanner;
