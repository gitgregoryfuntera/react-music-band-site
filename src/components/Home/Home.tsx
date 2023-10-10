import Album from "./Album";
import ArtistBio from "./ArtistBio";
import HomeBanner from "./HomeBanner";
import NewMusicVideo from "./NewMusicVidoe";
import UpComingShows from "./UpComingShows";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Album />
      <UpComingShows />
      <ArtistBio />
      <NewMusicVideo/>
    </main>
  );
};

export default Home;
