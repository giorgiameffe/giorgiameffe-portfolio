import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectCardList: React.FC = () => {

    return (

        <section className="max-w-6xl mx-auto md:px-18 mb-8">
            <h1 className="font-bold text-xl mt-5 mb-5">Progetti in evidenza</h1>
            <div className="flex justify-between">
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectCardList;