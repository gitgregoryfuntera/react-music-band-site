import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import {
  Music,
  PlayerState,
} from "@components/shared/customs/CustomControlPlayer/customReactPlayerHook";
import CLASSES from "./MusicPlayerListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

interface MusicPlayerListItemProps {
  music: Music;
  setPlayerState: (value: Partial<PlayerState>) => void;
  playerState: PlayerState;
}

const MusicPlayerListItem = (props: MusicPlayerListItemProps) => {
  const { setPlayerState, playerState, music } = props;
  return (
    <li className={`${CLASSES.root}`}>
      <CustomButton
        onClick={() => {
          setPlayerState({
            music,
          });

          if (playerState?.music.id === music.id) {
            setPlayerState({
              playing: true,
            });
          }

          if (playerState?.music.id === music.id && playerState.playing) {
            setPlayerState({
              playing: false,
            });
          }
        }}
      >
        <div
          className={`${CLASSES.listItem} ${
            playerState?.music.id === music.id ? CLASSES.selected : ""
          }`}
        >
          <div className={CLASSES.playIcon}>
            <FontAwesomeIcon
              size={"1x"}
              transform={`down-7 ${
                music.id === playerState.music.id && playerState.playing
                  ? ""
                  : "right-1"
              }`}
              icon={
                music.id === playerState.music.id && playerState.playing
                  ? faPause
                  : faPlay
              }
            />
          </div>
          <p>{music.song}</p>
        </div>
      </CustomButton>
    </li>
  );
};

export default MusicPlayerListItem;
