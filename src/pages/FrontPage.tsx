import {ProjectSection} from "./ProjectSection";
import {AboutMe} from "./AboutMe";
import {NavBar} from "./NavBar";
import {ActionToggle} from "../components/themeToggle";
import {ProjectsPage} from "./ProjectsPage";

export const FrontPage = () => {
    return(
        <>
            <NavBar/>
            <div className={"main-content"}>
                <AboutMe/>
                <ProjectsPage/>
            </div>
        </>
    );
}