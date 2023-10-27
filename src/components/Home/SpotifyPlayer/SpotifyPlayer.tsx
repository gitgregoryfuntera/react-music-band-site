import CLASSES from "./SpotifyPlayer.module.scss";

const SpotifyPlayer = () => {
  return (
    <div className={CLASSES.root}>
      <iframe
        src="https://open.spotify.com/embed/track/5qII2n90lVdPDcgXEEVHNy?utm_source=generator&theme=0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
