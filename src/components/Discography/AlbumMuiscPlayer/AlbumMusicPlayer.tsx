import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { LegacyRef, RefObject, useRef, useState } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomAudioPlayer from "@components/shared/customs/CustomAudioPlayer/CustomAudioPlayer";
import { BaseReactPlayerProps, OnProgressProps } from "react-player/base";

const AlbumMusicPlayer = () => {
  const music =
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";


  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const player = useRef<LegacyRef<ReactPlayer> | null>(null);

  const handleOnPlay = () => {
    setPlaying((prevState) => !prevState);
  };

  const handleOnMute = () => {
    setMuted((prevState) => !prevState);
  };

  const handleOnDuration = (duration: number) => {
    setDuration(duration)
  };

  const handleSeekChange = (value: number) => {
    setPlayed(value);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (value: number) => {
    setSeeking(false);
    setPlayed(value);
    player && (player?.current as BaseReactPlayerProps)?.seekTo(value);
  };

  const handleProgress = (state: OnProgressProps) => {
    const { played } = state;
    if (!seeking) {
      setPlayed(played);
    }
  };

  const ref = (playerRef: LegacyRef<ReactPlayer>) => {
    player.current = playerRef;
  };

  return (
    <section className={CLASSES.root}>
      <div>
        <ReactPlayer
          ref={ref as LegacyRef<ReactPlayer>}
          className="react-player"
          url={music}
          playing={playing}
          controls={true}
          muted={muted}
          onDuration={handleOnDuration}
          onProgress={handleProgress}
        />
      </div>

      <div className={CLASSES.controlContainer}>
        <CustomAudioPlayer
          played={played}
          onPlay={handleOnPlay}
          playing={playing}
          muted={muted}
          onMuted={handleOnMute}
          onSeek={handleSeekChange}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSeekMouseUp={handleSeekMouseUp}
          duration={duration}
        />
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
