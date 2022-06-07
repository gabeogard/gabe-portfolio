export function NavBar() {
    return (
            <nav className={"navbar"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#profile"}>Home</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#about"}>About</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#skills"}>Skills</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#projects"}>Projects</a></li>
                    <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Contact</a></li>
                </ul>
            </nav>
    );
}