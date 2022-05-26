import {ProjectSection} from "./ProjectSection";
import {AboutMe} from "./AboutMe";

function NavBar() {
    return (
        <div>
            <nav className={"navbar"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Home</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#about"}>About</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Projects</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Skills</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

const PostItem = () => {
    return(
        <div className={"flex-item"}>
            <h1>Hey</h1>
            <span>Hallo</span>
        </div>
    );
}

export const FrontPage = () => {
    return(
        <>
            <NavBar/>
            <div className={"main-content"}>
                <AboutMe/>
                <ProjectSection/>
            </div>
        </>
    );
}