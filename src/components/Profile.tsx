export const Profile = () =>{
    return(
        <div className={"profile"}>
            <img src="https://i.ibb.co/0cRXn8F/me.jpg" className={"img"} alt="picture_of_me"/>
            <div className={"contact-icons"}>
                <a href={"https://www.linkedin.com/in/gabriel-ogard"} target={"_blank"}><i className="devicon-linkedin-plain contact-icon"></i></a>
                <a href={"https://github.com/gabeogard"} target={"_blank"}><i className="devicon-github-original contact-icon"></i></a>
            </div>
        </div>
    );
}