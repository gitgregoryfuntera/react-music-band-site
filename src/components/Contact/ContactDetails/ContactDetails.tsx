import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./ContactDetails.module.scss";
import CustomInput from "@components/shared/customs/CustomInput/CustomInput";

const ContactDetails = () => {
  const { version } = useThemeContextProvider();
  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.title}>
          <h2>Get In Touch</h2>
        </div>
        <div className={CLASSES.content}>
          <div className={CLASSES.contactContainer}>
            <div className={CLASSES.email}>
              <p>want to talk?</p>
              <h3>hello@musicband.com</h3>
            </div>
            <div className={CLASSES.address}>
              <div className={CLASSES.block}>
                <p className={CLASSES.label}>Address</p>
                <p className={CLASSES.value}>47 F St Los Angeles 109, USA</p>
              </div>
              <div className={CLASSES.block}>
                <p className={CLASSES.label}>Phone</p>
                <p className={CLASSES.value}>0058 (8796) 456-865</p>
              </div>
            </div>

            <div className={CLASSES.contactMessage}>
              <p>
                We all know how important your information is. They are always
                safe with us.
              </p>
            </div>
          </div>
          <div className={CLASSES.sendMessageContainer}>
            <h3>Send Message</h3>
            <div>
              <form className={CLASSES.formContainer}>
                <CustomInput
                  type="text"
                  customInputClassType={"default"}
                  placeholder="Your name*"
                  required
                />
                <CustomInput
                  type="email"
                  customInputClassType={"default"}
                  placeholder="Your email*"
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
