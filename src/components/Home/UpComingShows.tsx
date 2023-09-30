import CustomCard from "@components/shared/commons/CustomCard/CustomCard";
import CLASSES from "../Home/UpcomingShows.module.scss";
import CustomButton from "@components/shared/commons/CustomButton/CustomButton";

const UpComingShows = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.title}>
        <h2>Upcoming Shows</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className={CLASSES.row}>
        <CustomCard customRootClass={CLASSES.card}>
          <div className={CLASSES.cardTitle}>
            <h2>MEGA CONCERT</h2>
            <p>02, JUN 2023</p>
          </div>
          <div className={CLASSES.cardAction}>
            <h3>Soul Club 179</h3>
            <h3>New York</h3>
            <CustomButton
              customButtonClassType="gradientRound"
              customRootClass={CLASSES.cardButton}
            >
              <span>Book My Ticket</span>
            </CustomButton>
          </div>
        </CustomCard>
        <CustomCard customRootClass={CLASSES.card}>
          <div className={CLASSES.cardTitle}>
            <h2>MEGA CONCERT</h2>
            <p>02, JUN 2023</p>
          </div>
          <div className={CLASSES.cardAction}>
            <h3>Soul Club 179</h3>
            <h3>New York</h3>
            <CustomButton
              customButtonClassType="gradientRound"
              customRootClass={CLASSES.cardButton}
            >
              <span>Book My Ticket</span>
            </CustomButton>
          </div>
        </CustomCard>
        <CustomCard customRootClass={CLASSES.card}>
          <div className={CLASSES.cardTitle}>
            <h2>MEGA CONCERT</h2>
            <p>02, JUN 2023</p>
          </div>
          <div className={CLASSES.cardAction}>
            <h3>Soul Club 179</h3>
            <h3>New York</h3>
            <CustomButton
              customButtonClassType="gradientRound"
              customRootClass={CLASSES.cardButton}
            >
              <span>Book My Ticket</span>
            </CustomButton>
          </div>
        </CustomCard>
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
