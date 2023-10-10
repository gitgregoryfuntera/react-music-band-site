import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./NewMusicView.module.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const NewMusicVideo = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.newMusicVideoContainer}>
        <div className={CLASSES.newMusicVideo}>
          <div className={CLASSES.playIconContainer}>
            <FontAwesomeIcon icon={faPlay} size={'2x'}/>
          </div>
          <h3>New Music Video</h3>
        </div>
      </div>
    </section>
  );
};

export default NewMusicVideo;
