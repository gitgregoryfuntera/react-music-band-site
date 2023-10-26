import { useState } from "react";
import CustomAnchorButton from "../../customs/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./HeaderNav.module.scss";
import { useMediaQuery } from "react-responsive";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { useThemeContextProvider } from "@components/shared/context/ThemeContext";

interface HeaderNavProps {
  isFadeIn: boolean;
}

const HeaderNav = (props: HeaderNavProps) => {
  const { version, setThemeVersion } = useThemeContextProvider();

  const currentPath = window.location.pathname;

  const NAV_PATH = [
    {
      key: "home",
      name: "Home",
      path: "/react-music-band-site/",
      subPath: [
        {
          name: "Version",
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
      path: "/",
    },
    {
      key: "gallery",
      name: "Gallery",
      path: "/",
    },
    {
      key: "contacts",
      name: "Contacts",
      path: "/",
    },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const [revealSubPath, setRevealSubPath] = useState<string | null>(null);

  return (
    <>
      {isDesktopOrLaptop && (
        <div className={CLASSES.root}>
          <nav>
            <ul>
              {NAV_PATH.map((route) => (
                <li key={route.key}>
                  <CustomAnchorButton
                    className={`${CLASSES.navLink} ${
                      currentPath === route.path ? CLASSES.navLinkActive : ""
                    }`}
                    href={route.path}
                    style={{
                      color: `${props?.isFadeIn ? "black" : "white"}`,
                    }}
                    onMouseEnter={() => setRevealSubPath(route.key)}
                    onMouseLeave={() => setRevealSubPath(null)}
                  >
                    {route.name}
                  </CustomAnchorButton>
                  {revealSubPath === route.key &&
                    route.subPath?.map((sub) => (
                      <ul
                        className={CLASSES.subPathContainer}
                        onMouseEnter={() => setRevealSubPath(route.key)}
                        onMouseLeave={() => setRevealSubPath(null)}
                        key={sub.key}
                      >
                        <li className={CLASSES.subPathItem}>
                          <CustomButton onClick={() => sub.onClick()}>
                            {sub.name}
                          </CustomButton>
                        </li>
                      </ul>
                    ))}
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
