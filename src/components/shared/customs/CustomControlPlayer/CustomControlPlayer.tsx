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
import ReactSlider from "react-slider";
import Duration from "./Duration";

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
    duration,
  } = props;

  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <div className={CLASSES.durationContainer}>
        <ReactSlider
          className={CLASSES.horizontalSlider}
          thumbClassName={"slider-thumb"}
          trackClassName={"slider-track"}
          renderThumb={(props) => <div {...props} />}
          renderTrack={(trackProps) => <div {...trackProps} />}
          min={0}
          max={100}
          value={(played ?? 0) * 100}
          onChange={(value) => onSeek && onSeek(value / 100)}
          onBeforeChange={() => handleSeekMouseDown && handleSeekMouseDown()}
          onAfterChange={(value) =>
            handleSeekMouseUp && handleSeekMouseUp(value / 100)
          }
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

      <div>
        <Duration seconds={(duration ?? 0) * (played ?? 0)} />/{" "}
        <Duration seconds={duration ?? 0} />
      </div>

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
