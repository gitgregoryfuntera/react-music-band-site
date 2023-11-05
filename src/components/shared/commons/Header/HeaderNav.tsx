import { useState } from "react";
import CustomAnchorButton from "../../customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./HeaderNav.module.scss";
import { useMediaQuery } from "react-responsive";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import { useLocation } from "react-router-dom";
interface HeaderNavProps {
  isFadeIn: boolean;
}

const HeaderNav = (props: HeaderNavProps) => {
  const { version, setThemeVersion } = useThemeContextProvider();

  const location = useLocation();

  const NAV_PATH = [
    {
      key: "home",
      name: "Home",
      path: "/",
      subPath: [
        {
          name: `${version === "light" ? "dark" : "light"} Version`,
          key: "version",
          onClick: () => {
            setThemeVersion(version !== "dark" ? "dark" : "light");
          },
        },
      ],
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
      key: "contacts",
      name: "Contacts",
      path: "/contacts",
    },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const [revealSubPath, setRevealSubPath] = useState<string | null>(null);

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
                    onMouseEnter={() => setRevealSubPath(route.key)}
                    onMouseLeave={() => setRevealSubPath(null)}
                  >
                    {route.name}
                  </CustomAnchorButton>
                  {revealSubPath === route.key &&
                    (route?.subPath?.length ?? 0) > 0 && (
                      <ul
                        className={CLASSES.subPathContainer}
                        onMouseEnter={() => setRevealSubPath(route.key)}
                        onMouseLeave={() => setRevealSubPath(null)}
                      >
                        {route.subPath?.map((sub) => (
                          <li className={CLASSES.subPathItem}>
                            <CustomButton onClick={() => sub.onClick()}>
                              {sub.name}
                            </CustomButton>
                          </li>
                        ))}
                      </ul>
                    )}
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
