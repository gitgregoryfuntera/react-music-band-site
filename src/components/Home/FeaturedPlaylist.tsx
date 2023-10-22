import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./FeaturedPlaylists.module.scss";
import image1 from '/assets/img4.jpg';
import image2 from '/assets/img5.jpg';
import image3 from '/assets/img6.jpg';
import image4 from '/assets/img7.jpg';
const FEATURED_PLAYLIST = [
  {
    image: image1,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image2,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image3,
    title: `Out Run Concept`,
    description: `History of Synth music, there is probably no one.`,
  },
  {
    image: image4,
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
