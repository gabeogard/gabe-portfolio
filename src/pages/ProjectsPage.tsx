import {ProjectCard} from "../components/ProjectTab"

export const ProjectsPage = () => {
    return(
        <div className={"projects-page"} id={"projects"}>
            <ProjectCard title={"Reverse Image Searcher"}
                         subTitle={"Android App"}
                         info={"Reverse Image Searcher application written in Kotlin for Android. The application" +
                         "lets you upload an image from the photo gallery on your device. " +
                         "After uploading an image, a request is sent to a reverse image search API and finds the most similar pictures available on the internet." +
                         " More info as well as screenshots on the README section of the Github project."}
                         git={"https://github.com/gabeogard/Reverse-Image-Searcher-Android-App"}
            />
            <ProjectCard title={"Gabe's Portfolio"}
                         subTitle={"Frontend Website"}
                         info={"The website you are currently visiting. This website is a constant work in progress and is by no means very complex as of now." +
                         " The site is built using React and as a reoccurring theme you might spot on here or on my Github profile: It is written almost entirely in TypeScript. I clearly like TypeScript quite a lot."}
                         git={"https://github.com/gabeogard/gabe-portfolio"}
            />
            <ProjectCard title={"Local History Learning Tool for Children"}
                         subTitle={"iOS / Android App"}
                         info={"This application is built using React Native and is written almost entirely in TypeScript. The application can currently be used in Expo Go and has been mostly tested using iOS devices, but we made sure to see it working on an Android device as well. We used Firebase for Authentication and Firestore Database for storing various data (Facts, Quiz questions, leaderboard scores etc.)" +
                         " The app lets you learn interesting historical facts about a little remote town in Norway called Rælingen." +
                         " After learing some facts while going on a guided trip, the user is prompted to play through a quiz to test their knowledge." +
                         " The quiz collects your score and also lets you share your score on the leaderboard."}
                         git={"https://github.com/gabeogard/local-history-react-native-application"}
            />
        </div>
    )
}