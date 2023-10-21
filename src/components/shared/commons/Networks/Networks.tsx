import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./Networks.module.scss";

const SOCIAL_IMAGES = [
  `/src/assets/logo1.png`,
  `/src/assets/logo2.png`,
  `/src/assets/logo3.png`,
  `/src/assets/logo4.png`,
];

const Networks = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.title}>
        <h2>Networks</h2>
      </div>
      <div className={CLASSES.row}>
        <p>
          Audio player software is used to play back sound recordings in one of
          the many formats available for computers today
        </p>
        <div className={CLASSES.socialsContainer}>
          {SOCIAL_IMAGES.map((img) => (
            <CustomCard className={CLASSES.socialCard}>
              <div className={CLASSES.imageContainer}>
                <img src={img} />
              </div>
            </CustomCard>
          ))}
        </div>
        <div className={CLASSES.contactInfoContainer}>
          <p>
            CONTACT <span>|</span> INFO@MUSIC.COM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Networks;