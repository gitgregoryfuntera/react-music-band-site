import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./CustomAudtioPlayer.module.scss";
import {
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { ReactPlayerProps } from "react-player";
import Duration from "./Duration";

interface CustomAudioPlayerProps extends ReactPlayerProps {
  customrootclass?: string;
  played?: number;
  duration?: number;
  onMuted?: () => void;
  handleSeekMouseDown?: () => void;
  handleSeekMouseUp?: (value: number) => void;
}

const CustomAudioPlayer = (props: CustomAudioPlayerProps) => {
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
        <div>
          <Duration seconds={(duration ?? 0) * (played ?? 0)} />/{" "}
          <Duration seconds={(duration ?? 0) * (1 - (played ?? 0))} />
        </div>
      </div>
      <div className={CLASSES.controlContainer}>
        <div>
          <h3>Song Name</h3>
          <p>Singer</p>
        </div>
        <div>
          <button>Prev</button>
          <button onClick={onPlay}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
          </button>
          <button>Next</button>
        </div>
        <div>
          <div>
            <button onClick={onMuted}>
              <FontAwesomeIcon icon={muted ? faVolumeMute : faVolumeUp} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
