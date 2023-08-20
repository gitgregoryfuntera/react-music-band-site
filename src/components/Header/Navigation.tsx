import CustomAnchorButton from "../shared/commons/CustomAnchorButton/CustomAnchorButton";
import CLASSES from "./Navigation.module.scss";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
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
                                <CustomAnchorButton className={`${CLASSES.navLink} ${CLASSES.navLinkActive}`} href="/">Home</CustomAnchorButton>
                            </li>
                            <li>
                                <CustomAnchorButton className={`${CLASSES.navLink} `} href="/">Albums</CustomAnchorButton>
                            </li>
                            <li>
                                <CustomAnchorButton className={`${CLASSES.navLink}`}  href="/">Live</CustomAnchorButton>
                            </li>
                            <li>
                                <CustomAnchorButton className={`${CLASSES.navLink}`}  href="/">About</CustomAnchorButton>
                            </li>
                            <li>
                                <CustomAnchorButton className={`${CLASSES.navLink}`} href="/">Gallery</CustomAnchorButton>
                            </li>
                            <li>
                                <CustomAnchorButton className={`${CLASSES.navLink}`}  href="/">Contacts</CustomAnchorButton>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};
export default Navigation;
