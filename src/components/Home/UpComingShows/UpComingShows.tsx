import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./UpcomingShows.module.scss";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import image1 from "/assets/upcoming-shows/img1.jpg";
import image2 from "/assets/upcoming-shows/img2.jpg";
import image3 from "/assets/upcoming-shows/img3.jpg";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

const UpComingShows = () => {
  const { version } = useThemeContextProvider();
  const UPCOMING_SHOWS_IMG = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.title}>
        <h2>Upcoming Shows</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className={CLASSES.row}>
        {UPCOMING_SHOWS_IMG?.map((show) => (
          <CustomCard
            customrootclass={CLASSES.card}
            key={show.id}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${show.image})`,
            }}
          >
            <div className={CLASSES.cardTitle}>
              <h2>MEGA CONCERT</h2>
              <p>02, JUN 2023</p>
            </div>
            <div className={CLASSES.cardAction}>
              <h3>Soul Club 179</h3>
              <h3>New York</h3>
              <CustomButton
                customButtonClassType="gradientRound"
                customrootclass={CLASSES.cardButton}
              >
                <span>Book My Ticket</span>
              </CustomButton>
            </div>
          </CustomCard>
        ))}
      </div>
      <div className={CLASSES.buttonContainer}>
        <CustomButton customButtonClassType="round">
          View All Shows
        </CustomButton>
      </div>
    </section>
  );
};

export default UpComingShows;
