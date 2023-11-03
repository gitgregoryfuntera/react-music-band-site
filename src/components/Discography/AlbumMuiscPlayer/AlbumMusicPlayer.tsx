import { LegacyRef, useReducer, useRef } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import { BaseReactPlayerProps, OnProgressProps } from "react-player/base";
import loveStory from "/assets/discography/love-story.mp3";

type Music = {
  id: number;
  song: string;
  singer: string;
  track: string;
};

interface PlayerState {
  duration: number;
  played: number;
  playing: boolean;
  muted: boolean;
  seeking: boolean;
  music: Music;
}

const AlbumMusicPlayer = () => {
  const availableMusic = [
    {
      id: 1,
      song: "Love Story",
      singer: "Taylor Swift",
      track: loveStory,
    },
    {
      id: 2,
      song: "Elephants Dream",
      singer: "The Wires",
      track:
        "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
    },
  ];

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
      music: availableMusic[0],
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

  const handlePlayNext = () => {
    const currentIndx = availableMusic.findIndex(
      (sound) => sound.id === playerState.music.id,
    );
    const nextPlayIndx = currentIndx + 1;
    const nextMusic = availableMusic[nextPlayIndx];
    const defaultMusic = availableMusic[0];

    setPlayerState({
      music: nextMusic ? nextMusic : defaultMusic,
    });
  };

  const handlePlayPrev = () => {
    const currentIndx = availableMusic.findIndex(
      (sound) => sound.id === playerState.music.id,
    );
    const prevPlayIndx = currentIndx - 1;
    const prevMusic = availableMusic[prevPlayIndx];
    const defaultMusic = availableMusic[0];

    setPlayerState({
      music: prevMusic ? prevMusic : defaultMusic,
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
          url={playerState.music.track}
          playing={playerState.playing}
          muted={playerState.muted}
          onDuration={handleOnDuration}
          onProgress={handleProgress}
          onEnded={handleOnEnded}
        />
      </div>

      <div className={CLASSES.controlContainer}>
        <CustomControlPlayer
          songName={playerState.music.song}
          singer={playerState.music.singer}
          played={playerState.played}
          onPlay={handleOnPlay}
          playing={playerState.playing}
          muted={playerState.muted}
          onMuted={handleOnMute}
          onSeek={handleSeekChange}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSeekMouseUp={handleSeekMouseUp}
          duration={playerState.duration}
          handlePlayNext={handlePlayNext}
          handlePlayPrev={handlePlayPrev}
        />
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
