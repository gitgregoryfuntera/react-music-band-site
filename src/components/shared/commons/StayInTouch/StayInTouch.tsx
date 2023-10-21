import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CLASSES from "./StayInTouch.module.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const StayInTouch = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 400 });

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
              style={{
                borderTopRightRadius: isLargeScreen ? 0 : "50px",
                borderBottomRightRadius: isLargeScreen ? 0 : "50px",
              }}
              placeholder="Enter your Email Address"
              type="email"
              name="email"
            />
            <FontAwesomeIcon
              style={{
                top: isLargeScreen ? "36%" : "15%",
              }}
              icon={faEnvelope}
              className={CLASSES.inputIcon}
              size="1x"
            />
            <button
              style={{
                borderTopLeftRadius: isLargeScreen ? 0 : "50px",
                borderBottomLeftRadius: isLargeScreen ? 0 : "50px",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
