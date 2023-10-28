import CLASSES from "./CustomBanner.module.scss";

interface CustomBannerProps {
  title: string;
  bannerImage: string;
}

const CustomBanner = (props: CustomBannerProps) => {
  const { title, bannerImage } = props;
  return (
    <div className={CLASSES.root}>
      <div className={CLASSES.titleContainer}>
        <h2>{title}</h2>
      </div>
      <div className={CLASSES.imgContainer}>
        <img src={bannerImage} width={"100%"} />
      </div>
    </div>
  );
};

export default CustomBanner;
