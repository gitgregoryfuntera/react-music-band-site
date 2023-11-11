import { LegacyRef } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import { useCustomReactPlayer } from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import albumImg from "/assets/discography/album.jpg";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import AlbumClosing from "./AlbumClosing";
import MusicPlayerListItem from "./MusicPlayerListItem";

import music1 from "/assets/music/drive-breakbeat-by-rockot.mp3";
import music2 from "/assets/music/glossy-Coma-Media.mp3";
import music3 from "/assets/music/once-in-paris-Pumpupthemind.mp3";
import music4 from "/assets/music/science-documentary-Lexin_Music.mp3";
import music5 from "/assets/music/titanium-by_Alisha_Sutudo.mp3";
import imgThumbnail from "/assets/music-album-thumbnail.jpg";

const AlbumMusicPlayer = () => {
  const { version } = useThemeContextProvider();
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
    setPlayerState,
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
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.recordLabelContainer}>
          <div className={CLASSES.label}>
            <p>New Album</p>
            <h2>Ghost EP</h2>
          </div>

          <div className={CLASSES.release}>
            <div>
              <p>Record Label</p>
              <h4>Blackmas Music</h4>
            </div>
            <div>
              <p>Release</p>
              <h4>October 2020</h4>
            </div>
          </div>
        </div>

        <div className={CLASSES.cardAlbumContainer}>
          <CustomCard>
            <div className={CLASSES.cardContent}>
              <div className={CLASSES.albumImgContainer}>
                <img src={albumImg} width={"100%"} />
              </div>
              <div className={CLASSES.albumPlayListContainer}>
                <div className={CLASSES.albumPlayList}>
                  <div className={CLASSES.albumTitle}>
                    <p>Album</p>
                    <h2>Written in The Stars</h2>
                  </div>
                  <div className={CLASSES.albumDetails}>
                    <h5>By Keane</h5>
                    <p>15 songs - 53 Min - 2016</p>
                  </div>
                  <div>
                    <ul>
                      {AVAILABLE_MUSIC.map((music) => (
                        <MusicPlayerListItem
                          key={music.id}
                          music={music}
                          playerState={playerState}
                          setPlayerState={setPlayerState}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>

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

        <AlbumClosing />
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
