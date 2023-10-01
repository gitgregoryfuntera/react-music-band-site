import CLASSES from "./ArtistBio.module.scss";

const ArtistBio = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.row}>
        <div className={CLASSES.artistBioContainer}>
          <div className={CLASSES.title}>
            <h2>Artist Bio</h2>
          </div>
          <div className={CLASSES.bioContent}>
            <q>
              If I can play one note and make you cry, then that's better than
              those fancy dancers playing twenty notes.
            </q>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              maxime ab facilis id explicabo accusantium doloremque ad quod
              consectetur inventore sequi. Ad temporibus fugit voluptates
              tempora perferendis sunt pariatur eveniet?
            </p>
          </div>
        </div>
        <div className={CLASSES.artistImage}>
          <img src={`/src/assets/artist_bio_image.png`} />
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
