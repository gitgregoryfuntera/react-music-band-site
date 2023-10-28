import Album from "../../components/Home/Album/Album";
import ArtistBio from "../../components/Home/ArtistBio/ArtistBio";
import FeaturedPlaylist from "../../components/Home/FeaturePlaylist/FeaturedPlaylist";
import HomeBanner from "../../components/Home/Banner/Banner";
import LastShorts from "../../components/Home/LastShorts/LastShorts";
import NewMusicVideo from "../../components/Home/NewMusicVideo/NewMusicVideo";
import UpComingShows from "../../components/Home/UpComingShows/UpComingShows";

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
