import Album from "./Album";
import ArtistBio from "./ArtistBio";
import HomeBanner from "./HomeBanner";
import UpComingShows from "./UpComingShows";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Album />
      <UpComingShows />
      <ArtistBio />
    </main>
  );
};

export default Home;
