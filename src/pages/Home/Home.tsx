import Album from "../../components/Home/Album";
import ArtistBio from "../../components/Home/ArtistBio";
import FeaturedPlaylist from "../../components/Home/FeaturedPlaylist";
import HomeBanner from "../../components/Home/HomeBanner";
import LastShorts from "../../components/Home/LastShorts";
import NewMusicVideo from "../../components/Home/NewMusicVideo";
import UpComingShows from "../../components/Home/UpComingShows";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Album />
      <UpComingShows />
      <ArtistBio />
      <NewMusicVideo />
      <FeaturedPlaylist />
      <LastShorts />
    </>
  );
};

export default Home;
