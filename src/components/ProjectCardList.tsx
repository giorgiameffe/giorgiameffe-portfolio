import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectCardList: React.FC = () => {

    return (

        <section>
            <h1 className="font-bold font-">I miei progetti</h1>

            {projects.map(project => (
                <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </section>
    )

}

export default ProjectCardList;