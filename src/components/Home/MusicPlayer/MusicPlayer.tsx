import ReactPlayer from "react-player";
import CLASSES from "./MusicPlayer.module.scss";
import { useCustomReactPlayer } from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import { LegacyRef } from "react";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";

import music1 from "/assets/music/drive-breakbeat-by-rockot.mp3";
import music2 from "/assets/music/glossy-Coma-Media.mp3";
import music3 from "/assets/music/once-in-paris-Pumpupthemind.mp3";
import music4 from "/assets/music/science-documentary-Lexin_Music.mp3";
import music5 from "/assets/music/titanium-by_Alisha_Sutudo.mp3";
import imgThumbnail from "/assets/music-album-thumbnail.jpg";

const MusicPlayer = () => {
  const AVAILABLE_MUSIC = [
    {
      id: 1,
      song: "Drive Breakbeat",
      singer: "Rockot",
      track: music1,
      imgThumbnail,
    },
    {
      id: 2,
      song: "Glossy",
      singer: "Coma-Media",
      track: music2,
      imgThumbnail,
    },
    {
      id: 3,
      song: "Once in Paris",
      singer: "Pumpupthemind",
      track: music3,
      imgThumbnail,
    },
    {
      id: 4,
      song: "Science Documentary",
      singer: "Lexin_Music",
      track: music4,
      imgThumbnail,
    },
    {
      id: 5,
      song: "Titanium",
      singer: "Alisha_Sutudo",
      track: music5,
      imgThumbnail,
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
