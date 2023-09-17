import Album from "./Album";
import CLASSES from "./Home.module.scss";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Album />
    </main>
  );
};

export default Home;
