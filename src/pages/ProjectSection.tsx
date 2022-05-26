export function ProjectSection() {
    return (
        <div className={"projects"}>
            <div className={"project"}>
                <img src={"https://i.ibb.co/2g1KdF9/uploaded.png"} alt={"app-image"} width={"189"} height={"344.5"}/>
                <div className={"project-text"}>
                    <h2>Reverse Image Searcher - Android app</h2>
                    <p>Android application that lets you upload an image from your phone gallery,
                        and search for similar images online. Just like the well known reverse image search.
                        The app currently uses bings image search API but its also capable of using TinEye and Google.
                        The app was written in Kotlin.</p>
                    <a href={"https://github.com/gabeogard/Reverse-Image-Searcher-Android-App"} target={"_blank"}>
                        <i className="devicon-github-original contact-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}