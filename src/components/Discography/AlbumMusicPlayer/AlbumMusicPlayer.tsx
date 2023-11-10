import { LegacyRef } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import loveStory from "/assets/discography/love-story.mp3";
import { useCustomReactPlayer } from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import albumImg from "/assets/discography/album.jpg";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import AlbumClosing from "./AlbumClosing";
import MusicPlayerListItem from "./MusicPlayerListItem";

const AlbumMusicPlayer = () => {
  const { version } = useThemeContextProvider();
  const AVAILABLE_MUSIC = [
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
