import CustomAnchorButton from "../shared/commons/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./HeaderNav.module.scss";
import { useMediaQuery } from "react-responsive";

interface HeaderNavProps {
  isFadeIn: boolean;
}

const HeaderNav = (props: HeaderNavProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <div className={CLASSES.root}>
          <nav>
            <ul>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink} ${CLASSES.navLinkActive}`}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  Home
                </CustomAnchorButton>
              </li>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink} `}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  Albums
                </CustomAnchorButton>
              </li>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink}`}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  Live
                </CustomAnchorButton>
              </li>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink}`}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  About
                </CustomAnchorButton>
              </li>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink}`}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  Gallery
                </CustomAnchorButton>
              </li>
              <li>
                <CustomAnchorButton
                  className={`${CLASSES.navLink}`}
                  href="/"
                  style={{
                    color: `${props?.isFadeIn ? "black" : "white"}`,
                  }}
                >
                  Contacts
                </CustomAnchorButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default HeaderNav;
