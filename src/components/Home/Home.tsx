import Album from "./Album";
import CLASSES from "./Home.module.scss";
import HomeBanner from "./HomeBanner";
import SpotifyPlayer from "./SpotifyPlayer";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      {/* <SpotifyPlayer /> */}
      <Album />
    </main>
  );
};

export default Home;
