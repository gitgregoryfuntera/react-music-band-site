import Album from "./Album";
import ArtistBio from "./ArtistBio";
import FeaturedPlaylist from "./FeaturedPlaylist";
import HomeBanner from "./HomeBanner";
import LastShorts from "./LastShorts";
import NewMusicVideo from "./NewMusicVidoe";
import UpComingShows from "./UpComingShows";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Album />
      <UpComingShows />
      <ArtistBio />
      <NewMusicVideo />
      <FeaturedPlaylist />
      <LastShorts/>
    </main>
  );
};

export default Home;
