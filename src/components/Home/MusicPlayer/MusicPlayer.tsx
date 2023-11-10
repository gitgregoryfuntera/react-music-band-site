import ReactPlayer from "react-player";
import CLASSES from "./MusicPlayer.module.scss";
import loveStory from "/assets/discography/love-story.mp3";
import { useCustomReactPlayer } from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import { LegacyRef } from "react";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import imgThumbnail from "/assets/music-album-thumbnail.jpg";

const MusicPlayer = () => {
  const AVAILABLE_MUSIC = [
    {
      id: 1,
      song: "Love Story",
      singer: "Taylor Swift",
      track: loveStory,
      imgThumbnail: imgThumbnail,
    },
    {
      id: 2,
      song: "Elephants Dream",
      singer: "The Wires",
      track:
        "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
      imgThumbnail: imgThumbnail,
    },
  ];

  const {
    playerState,
    playerRef,
    handleOnPlay,
    handleOnMute,
    handleOnDuration,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleProgress,
    handleOnEnded,
    handlePlayNext,
    handlePlayPrev,
  } = useCustomReactPlayer({
    playerList: AVAILABLE_MUSIC,
  });

  return (
    <div className={CLASSES.root}>
      <div className={CLASSES.playerContainer}>
        <ReactPlayer
          style={{
            display: "none",
          }}
          className={CLASSES.player}
          ref={playerRef as LegacyRef<ReactPlayer>}
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
          customrootclass={CLASSES.control}
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
          imgThumbnail={playerState.music.imgThumbnail}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
