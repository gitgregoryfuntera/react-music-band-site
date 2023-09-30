import Album from "./Album";
import CLASSES from "./Home.module.scss";
import HomeBanner from "./HomeBanner";
import UpComingShows from "./UpComingShows";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Album />
      <UpComingShows />
    </main>
  );
};

export default Home;
