import React from "react";

interface ProjectDetailHeroProps {
    title: string;
    briefDescription: string;
    heroImage: string;
}

const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({
    title,
    briefDescription,
    heroImage,
}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{briefDescription}</p>
            <img src={heroImage} alt={title} />
        </>
    );
};

export default ProjectDetailHero;