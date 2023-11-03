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
  songName: string;
  singer: string;
  onMuted?: () => void;
  handleSeekMouseDown?: () => void;
  handleSeekMouseUp?: (value: number) => void;
  handlePlayNext?: () => void;
  handlePlayPrev?: () => void;
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
    handlePlayNext,
    handlePlayPrev,
    played,
    duration,
    songName,
    singer,
  } = props;

  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <div className={CLASSES.durationContainer}>
        <ReactSlider
          className={"horizontal-slider"}
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
        <div className={CLASSES.singerDetailsContainer}>
          <h3>{songName}</h3>
          <p>{singer}</p>
        </div>

        <div className={CLASSES.playerControl}>
          <CustomButton customrootclass={CLASSES.btnControl} onClick={handlePlayPrev}>
            <FontAwesomeIcon icon={faBackwardFast} size="2x" />
          </CustomButton>
          <CustomButton customButtonClassType="gradientCircle" onClick={onPlay}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} size="2x" />
          </CustomButton>
          <CustomButton customrootclass={CLASSES.btnControl} onClick={handlePlayNext}>
            <FontAwesomeIcon icon={faForwardFast} size="2x" />
          </CustomButton>
        </div>

        <div className={CLASSES.musicControlContainer}>
          <div className={CLASSES.durationContainer}>
            <Duration seconds={(duration ?? 0) * (played ?? 0)} />/{" "}
            <Duration seconds={duration ?? 0} />
          </div>
          <CustomButton onClick={onMuted}>
            <FontAwesomeIcon
              icon={muted ? faVolumeMute : faVolumeUp}
              size={"2x"}
            />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomControlPlayer;
