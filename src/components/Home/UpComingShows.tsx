import CustomCard from "@components/shared/commons/CustomCard/CustomCard";
import CLASSES from "../Home/UpcomingShows.module.scss";
import CustomButton from "@components/shared/commons/CustomButton/CustomButton";

const UPCOMING_SHOWS_IMG = [
  {
    id: 1,
    image: `/src/assets/upcoming-shows/img1.jpg`,
  },
  {
    id: 2,
    image: `/src/assets/upcoming-shows/img2.jpg`,
  },
  {
    id: 3,
    image: `/src/assets/upcoming-shows/img3.jpg`,
  },
];

const UpComingShows = () => {
  return (
    <section className={CLASSES.root}>
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
