import CustomAnchorButton from "../../customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./HeaderNav.module.scss";
import { useMediaQuery } from "react-responsive";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useLocation } from "react-router-dom";
interface HeaderNavProps {
  isFadeIn: boolean;
}

const HeaderNav = (props: HeaderNavProps) => {
  const { version } = useThemeContextProvider();

  const location = useLocation();

  const NAV_PATH = [
    {
      key: "home",
      name: "Home",
      path: "/",
    },
    {
      key: "albums",
      name: "Albums",
      path: "/discography",
    },
    {
      key: "live",
      name: "live",
      path: "/live-shows",
    },
    {
      key: "about",
      name: "About",
      path: "/about",
    },
    {
      key: "gallery",
      name: "Gallery",
      path: "/gallery",
    },
    {
      key: "contact",
      name: "Contact",
      path: "/contact",
    },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const fadeClass = props?.isFadeIn ? "fadeIn" : "fadeOut";

  return (
    <>
      {isDesktopOrLaptop && (
        <div className={`${CLASSES.root} ${CLASSES[version]}`}>
          <nav>
            <ul>
              {NAV_PATH.map((route) => (
                <li key={route.key}>
                  <CustomAnchorButton
                    className={`${CLASSES.navLink} ${
                      location?.pathname === route.path
                        ? CLASSES.navLinkActive
                        : ""
                    } ${CLASSES[fadeClass]}`}
                    to={route.path}
                  >
                    {route.name}
                  </CustomAnchorButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default HeaderNav;
