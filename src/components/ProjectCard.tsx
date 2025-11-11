import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (

        <article>
            <figure>
                <img src={project.image} alt={project.title} />
            </figure>

            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>

                <Link to={`/projects/${project.slug}`}>
                    Scopri di più
                </Link>
            </div>
        </article>
    );
};

export default ProjectCard;