import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./ContactDetails.module.scss";
import CustomInput from "@components/shared/customs/CustomInput/CustomInput";
import CustomTextArea from "@components/shared/customs/CustomTextArea/CustomTextArea";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  slideLeftVariant,
  slideRightVariant,
  slideUpVariant,
} from "@components/shared/animations/commonVariants";

const ContactDetails = () => {
  const { version } = useThemeContextProvider();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { variantKeys: variantSlideUpKeys, variants: variantsSlideUp } =
    slideUpVariant();
  const { variants: variantsSlideLeftVariant } = slideLeftVariant();
  const { variants: variantsSlideRightVariant } = slideRightVariant();
  return (
    <motion.section
      whileInView={variantSlideUpKeys.onscreen}
      initial={
        isDesktopOrLaptop
          ? variantSlideUpKeys.offscreen
          : variantSlideUpKeys.onscreen
      }
      viewport={{
        once: true,
      }}
      transition={{
        staggerChildren: 0,
        delayChildren: 0.3,
      }}
      className={`${CLASSES.root} ${CLASSES[version]}`}
    >
      <div className={CLASSES.wrapper}>
        <motion.div variants={variantsSlideUp} className={CLASSES.title}>
          <h2>Get In Touch</h2>
        </motion.div>
        <div className={CLASSES.content}>
          <motion.div
            variants={variantsSlideLeftVariant}
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
            variants={variantsSlideRightVariant}
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
    </motion.section>
  );
};

export default ContactDetails;
