import {Bio} from "../components/Bio";
import {Skills} from "../components/Skills";
import {Profile} from "../components/Profile"



export const AboutMe = () => {

    return (
        <div className={'about-section'}>
            <Profile/>
            <Bio/>
            <Skills/>
        </div>
    );
}