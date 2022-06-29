import React from 'react'

type ProjectCardProps = {
    title: string,
    subTitle: string,
    info: string,
    git: string
}


export const ProjectCard = ({title, subTitle, info, git}: ProjectCardProps) => {
    return(
        <div className={"project-card"}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{info}</p>
            <button><a href={git} target={"_blank"}>Github</a></button>
        </div>
    );
}