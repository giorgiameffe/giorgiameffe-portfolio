import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../data/projectsData";

type ProjectCardProps = {
    project: Project;
    featured?: boolean;
};

const ProjectCard = ({ project, featured }: ProjectCardProps) => {

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className={`p-4 border border-gray-300 dark:border-gray-800 rounded-xl ${featured ? "w-72 h-96" : "w-full h-96"}
            flex flex-col shadow-sm hover:shadow-lg transition-shadow mt-4 mb-4`}
        >
            <Link to={`/projects/${project.slug}`}>
                <figure className="h-40 overflow-hidden mb-3 flex-shrink-0">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </figure>
            </Link>

            <div className="flex flex-col flex-1 min-h-0">
                <div className="flex-grow">

                    <h1 className="font-bold text-md mb-1">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mt-1 mb-2">
                        {project.categories?.map((cat, index) => (
                            <span
                                key={index}
                                className={`px-2 py-1 rounded-full text-sm font-semibold ${cat.color}`}
                            >
                                {cat.name}
                            </span>
                        ))}
                    </div>

                    <p className={`text-sm ${featured ? "line-clamp-3" : "line-clamp-4"}`}>
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-4">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="flex justify-center bg-rose-400 hover:bg-rose-500 dark:bg-rose-700 font-semibold text-white text-md px-8 py-2 
                        rounded-full transition-colors duration-700 ease-out"
                    >
                        Scopri di più
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;