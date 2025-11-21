import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

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
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            whileHover={{ scale: 1.03 }}
            className={`p-4 border border-gray-300 dark:border-gray-800 rounded-xl ${featured ? "w-72 h-96" : "w-full h-96"}
            flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow mt-4 mb-4`}
        >
            <Link to={`/projects/${project.slug}`}>
                <figure className="h-40 overflow-hidden mb-4">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </figure>
            </Link>

            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <h1 className="font-bold mb-2">{project.title}</h1>
                    <p className={`text-sm line-clamp-${featured ? 3 : 4}`}>{project.description}</p>
                </div>

                <Link
                    to={`/projects/${project.slug}`}
                    className="flex justify-center bg-rose-400 dark:bg-rose-700 font-semibold text-white text-md px-8 py-2 
                    rounded-full shadow-md hover:shadow-xl transition mt-4"
                >
                    Scopri di più
                </Link>
            </div>
        </motion.article>
    );
};

export default ProjectCard;