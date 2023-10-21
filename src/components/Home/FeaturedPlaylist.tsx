import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./FeaturedPlaylists.module.scss";

const FEATURED_PLAYLIST = [
  {
    image: `/assets/img4.jpg`,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: `/assets/img5.jpg`,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: `/assets/img6.jpg`,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: `/assets/img7.jpg`,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
];

const FeaturedPlaylist = () => {
  return (
    <section className={CLASSES.root}>
      <div>
        <h2>Featured Playlists</h2>
      </div>
      <div className={CLASSES.cardContainer}>
        {FEATURED_PLAYLIST?.map((item) => (
          <CustomCard>
            <div className={CLASSES.playlistWrapper}>
              <div className={CLASSES.imgContainer}>
                <img src={item.image} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaylist;
