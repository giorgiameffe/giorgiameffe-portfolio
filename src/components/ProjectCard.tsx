import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (

        <article className="p-4 border rounded-xl w-72 h-96 flex flex-col justify-between">
            <figure className="h-40 overflow-hidden mb-4">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-md"
                />
            </figure>

            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <h1 className="font-bold mb-2">{project.title}</h1>
                    <p className="text-sm overflow-hidden">{project.description}</p>
                </div>

                <Link
                    to={`/projects/${project.slug}`}
                    className="bg-rose-400 dark:bg-rose-700 text-white px-8 py-2 rounded-full shadow-md hover:shadow-xl transition mt-4 self-end"
                >
                    Scopri di più
                </Link>
            </div>
        </article>
    );
};

export default ProjectCard;