import {Bio} from "../components/Bio";
import {Skills} from "../components/Skills";
import {Profile} from "../components/Profile"


export const AboutMe = () => {
    return (
        <div className={"flex-container"} id={"about"}>
            <div className={"item1"}>
                <Bio/>
            </div>
            <div className={"item2"}>
                <Profile/>
            </div>
            <div className={"item3"}>
                <Skills/>
            </div>
        </div>
    );
}