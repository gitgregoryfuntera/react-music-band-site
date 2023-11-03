import { LegacyRef } from "react";
import ReactPlayer from "react-player";
import CLASSES from "./AlbumMusicPlayer.module.scss";
import CustomControlPlayer from "@components/shared/customs/CustomControlPlayer/CustomControlPlayer";
import loveStory from "/assets/discography/love-story.mp3";
import { useCustomReactPlayer } from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import albumImg from "/assets/discography/album.jpg";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";

const AlbumMusicPlayer = () => {
  const { version } = useThemeContextProvider();
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
    playerList: availableMusic,
  });

  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.wrapper}>
        <div></div>

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
                      {availableMusic.map((music) => (
                        <li key={music.id}>
                          <CustomButton
                            onClick={() => {
                              if (playerState?.music.id === music.id) {
                                handleOnPlay();
                              }
                              setPlayerState({
                                music,
                              });
                            }}
                          >
                            <div
                              className={`${CLASSES.listItem} ${
                                playerState?.music.id === music.id
                                  ? CLASSES.selected
                                  : ""
                              }`}
                            >
                              <div className={CLASSES.playIcon}>
                                <FontAwesomeIcon
                                  size={"1x"}
                                  transform={`down-7 ${
                                    music.id === playerState.music.id &&
                                    playerState.playing
                                      ? ""
                                      : "right-1"
                                  }`}
                                  icon={
                                    music.id === playerState.music.id &&
                                    playerState.playing
                                      ? faPause
                                      : faPlay
                                  }
                                />
                              </div>
                              <p>{music.song}</p>
                            </div>
                          </CustomButton>
                        </li>
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
              height: 0,
              width: 0,
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
      </div>
    </section>
  );
};

export default AlbumMusicPlayer;
