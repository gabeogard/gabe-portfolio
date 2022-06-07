import {ProjectSection} from "./ProjectSection";
import {AboutMe} from "./AboutMe";
import {NavBar} from "./NavBar";
import {ActionToggle} from "../components/themeToggle";

export const FrontPage = () => {
    return(
        <>
            <NavBar/>
            <div className={"main-content"}>
                <AboutMe/>
            </div>
        </>
    );
}