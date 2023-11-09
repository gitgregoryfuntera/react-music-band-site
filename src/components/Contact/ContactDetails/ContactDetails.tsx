import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./ContactDetails.module.scss";
import CustomInput from "@components/shared/customs/CustomInput/CustomInput";
import CustomTextArea from "@components/shared/customs/CustomTextArea/CustomTextArea";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { Variants, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ContactDetails = () => {
  const { version } = useThemeContextProvider();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const variantSlideUp: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.5,
      },
    },
  };

  const variantSlideLeft: Variants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  const variantSlideRight: Variants = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.wrapper}>
        <motion.div
          whileInView={"onscreen"}
          initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
          variants={variantSlideUp}
          viewport={{
            once: true,
          }}
          className={CLASSES.title}
        >
          <h2>Get In Touch</h2>
        </motion.div>
        <div className={CLASSES.content}>
          <motion.div
            whileInView={"onscreen"}
            initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
            variants={variantSlideLeft}
            viewport={{
              once: true,
            }}
            className={CLASSES.contactContainer}
          >
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
          </motion.div>

          <motion.div
            whileInView={"onscreen"}
            initial={isDesktopOrLaptop ? "offscreen" : "onscreen"}
            variants={variantSlideRight}
            viewport={{
              once: true,
            }}
            className={CLASSES.sendMessageContainer}
          >
            <h3>Send Message</h3>
            <form className={CLASSES.formContainer}>
              <CustomInput
                customrootclass={CLASSES.formField}
                type="text"
                customInputClassType={"default"}
                placeholder="Your name"
              />
              <CustomInput
                customrootclass={CLASSES.formField}
                type="email"
                customInputClassType={"default"}
                placeholder="Your email*"
                required
              />
              <CustomTextArea
                customrootclass={CLASSES.formField}
                placeholder="Your message*"
                customTextAreaClassType={"default"}
                rows={3}
                required
              />
              <div className={CLASSES.formBtnContainer}>
                <CustomButton customrootclass={CLASSES.formBtn} type="submit">
                  Send Message
                </CustomButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
