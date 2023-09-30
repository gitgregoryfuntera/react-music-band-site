import CLASSES from "./Album.module.scss";

const Album = () => {
  return (
    <section className={CLASSES.root}>
      <h2>New Album</h2>
      <div className={CLASSES.spotifyEmbed}>
        <iframe
          src="https://open.spotify.com/embed/album/0SgxFNwplcpKZTSRhh2Snh?utm_source=generator"
          allowFullScreen
          allow={
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }
          loading="lazy"
        ></iframe>
      </div>
      <div className={CLASSES.albumMessage}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime,
          illo.
        </p>
      </div>
    </section>
  );
};

export default Album;
