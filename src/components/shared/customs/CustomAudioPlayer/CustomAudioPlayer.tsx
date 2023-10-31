import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./CustomAudtioPlayer.module.scss";
import {
  faPause,
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { ReactPlayerProps } from "react-player";

interface CustomAudioPlayerProps extends ReactPlayerProps {
  customrootclass?: string;
  onMuted?: () => void;
}

const CustomAudioPlayer = (props: CustomAudioPlayerProps) => {
  const { customrootclass, onMuted, muted, onPlay, playing } = props;
  return (
    <div className={`${CLASSES.root} ${customrootclass}`}>
      <div className={CLASSES.durationContainer}>
        <input type="range" max="100" value="0" />
        <div>00:00 / 4:27</div>
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
