import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./CustomControlPlayer.module.scss";
import {
  faBackwardFast,
  faForwardFast,
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { ReactPlayerProps } from "react-player";
import CustomButton from "../CustomButton/CustomButton";

interface CustomControlPlayerProps extends ReactPlayerProps {
  customrootclass?: string;
  played?: number;
  duration?: number;
  onMuted?: () => void;
  handleSeekMouseDown?: () => void;
  handleSeekMouseUp?: (value: number) => void;
}

const CustomControlPlayer = (props: CustomControlPlayerProps) => {
  const {
    customrootclass,
    onMuted,
    muted,
    onPlay,
    playing,
    onSeek,
    handleSeekMouseDown,
    handleSeekMouseUp,
    played,
  } = props;

  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <div className={CLASSES.durationContainer}>
        <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played ?? 0}
          onChange={({ target: { value } }) =>
            onSeek && onSeek(parseFloat(value))
          }
          onMouseUp={(e) =>
            handleSeekMouseUp && handleSeekMouseUp((e.target as any).value)
          }
          onMouseDown={() => handleSeekMouseDown && handleSeekMouseDown()}
        />
      </div>
      <div className={CLASSES.controlContainer}>
        <CustomButton customrootclass={CLASSES.btnControl}>
          <FontAwesomeIcon icon={faBackwardFast} size="2x" />
        </CustomButton>
        <CustomButton customrootclass={CLASSES.btnPlay} onClick={onPlay}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} size="2x" />
        </CustomButton>
        <CustomButton customrootclass={CLASSES.btnControl}>
          <FontAwesomeIcon icon={faForwardFast} size="2x" />
        </CustomButton>
      </div>

      {/* <div>
        <h3>Song Name</h3>
        <p>Singer</p>
      </div> */}

      {/* <div>
        <Duration seconds={(duration ?? 0) * (played ?? 0)} />/{" "}
        <Duration seconds={duration ?? 0} />
      </div> */}

      <div className={CLASSES.bottomControlContainer}>
        <CustomButton onClick={onMuted}>
          <FontAwesomeIcon
            icon={muted ? faVolumeMute : faVolumeUp}
            size={"2x"}
          />
        </CustomButton>
      </div>
    </div>
  );
};

export default CustomControlPlayer;
