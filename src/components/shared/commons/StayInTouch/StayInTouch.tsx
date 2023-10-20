import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./StayInTouch.module.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StayInTouch = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.row}>
        <div className={CLASSES.messageContainer}>
          <h2>Stay In Touch</h2>
          <p>Sign up for new releases to your inbox every month</p>
        </div>
        <div className={CLASSES.inputContainer}>
          <form>
            <input
              placeholder="Enter your Email Address"
              type="email"
              name="email"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className={CLASSES.inputIcon}
              size="1x"
            />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
