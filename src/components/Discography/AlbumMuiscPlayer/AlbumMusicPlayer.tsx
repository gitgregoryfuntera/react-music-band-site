import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useState } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomAudioPlayer from "@components/shared/customs/CustomAudioPlayer/CustomAudioPlayer";

const AlbumMusicPlayer = () => {
  const music =
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false)

  const handleOnPlay = () => {
    setPlaying((prevState) => !prevState);
  };

  const handleOnMute = () => {
    setMuted((prevState) => !prevState);
  };

  const handleOnDuration = (duration: number) => {
    console.log("🚀 ~ file: AlbumMusicPlayer.tsx:22 ~ handleOnDuration ~ duration:", duration); 
  }


  return (
    <section className={CLASSES.root}>
      <div>
        <ReactPlayer
          className="react-player"
          url={music}
          playing={playing}
          controls={true}
          muted={muted}
          onDuration={handleOnDuration}
        />
      </div>

      <div className={CLASSES.controlContainer}>
        <CustomAudioPlayer
          onPlay={handleOnPlay}
          playing={playing}
          muted={muted}
          onMuted={handleOnMute}
        />
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
