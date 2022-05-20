function NavBar() {
    return (
        <nav className={"navbar"}>
            <ul className={"navbar-nav"}>
                <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Home</a></li>
                <li className={"nav-item"}><a className={"nav-link"} href={"#about"}>About</a></li>
                <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Projects</a></li>
                <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Skills</a></li>
                <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Contact</a></li>
            </ul>
        </nav>
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

function AboutMe() {
    return(

        <div className={"flex-item"} id={"about"}>
            <h1>About me</h1>
            <span className={"type"}>
                I am a Fullstack Software Engineer <br/>
                Currently studying Frontend and Mobile Development at Kristiania University College.
            </span>
        </div>
    );
}

function ProjectSection() {
    return null;
}

export const FrontPage = () => {
    return(
        <>
            <NavBar/>
            <div className={"main-flex"}>
                <AboutMe/>
                <ProjectSection/>
            </div>
        </>
    );
}