import { LegacyRef, useReducer, useRef } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import { BaseReactPlayerProps, OnProgressProps } from "react-player/base";

interface PlayerState {
  duration: number;
  played: number;
  playing: boolean;
  muted: boolean;
  seeking: boolean;
}

const AlbumMusicPlayer = () => {
  const music =
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";

  const [playerState, setPlayerState] = useReducer(
    (state: PlayerState, action: Partial<PlayerState>) => ({
      ...state,
      ...action,
    }),
    {
      duration: 0,
      played: 0,
      playing: false,
      muted: false,
      seeking: false,
    },
  );

  const player = useRef<LegacyRef<ReactPlayer> | null>(null);

  const handleOnPlay = () => {
    setPlayerState({
      playing: !playerState.playing,
    });
  };

  const handleOnMute = () => {
    setPlayerState({
      muted: !playerState.muted,
    });
  };

  const handleOnDuration = (duration: number) => {
    setPlayerState({
      duration,
    });
  };

  const handleSeekChange = (value: number) => {
    setPlayerState({
      played: value,
    });
  };

  const handleSeekMouseDown = () => {
    setPlayerState({
      seeking: true,
    });
  };

  const handleSeekMouseUp = (value: number) => {
    setPlayerState({
      seeking: false,
    });
    setPlayerState({
      played: value,
    });
    player && (player?.current as BaseReactPlayerProps)?.seekTo(value);
  };

  const handleProgress = (state: OnProgressProps) => {
    const { played } = state;
    if (!playerState.seeking) {
      setPlayerState({
        played,
      });
    }
  };

  const handleOnEnded = () => {
    setPlayerState({
      playing: false,
    });
  };

  const ref = (playerRef: LegacyRef<ReactPlayer>) => {
    player.current = playerRef;
  };

  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.playerContainer}>
        <ReactPlayer
          style={{
            height: 0,
            width: 0,
          }}
          className={CLASSES.player}
          ref={ref as LegacyRef<ReactPlayer>}
          url={music}
          playing={playerState.playing}
          muted={playerState.muted}
          onDuration={handleOnDuration}
          onProgress={handleProgress}
          onEnded={handleOnEnded}
        />
      </div>

      <div className={CLASSES.controlContainer}>
        <CustomControlPlayer
          played={playerState.played}
          onPlay={handleOnPlay}
          playing={playerState.playing}
          muted={playerState.muted}
          onMuted={handleOnMute}
          onSeek={handleSeekChange}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSeekMouseUp={handleSeekMouseUp}
          duration={playerState.duration}
        />
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
