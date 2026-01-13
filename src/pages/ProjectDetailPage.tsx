import React from "react";
import ProjectDetailHero from "../components/ProjectDetailHero";
import ProjectDetailInfoBar from "../components/ProjectDetailInfoBar";
import ProjectDetailContent from "../components/ProjectDetailContent";
import ProjectDetailGallery from "../components/ProjectDetailGallery";
import { useParams } from "react-router-dom";
import ProjectsDetail from "../data/projectsDetailData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetailsPage: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();

    const project = ProjectsDetail.find(project => project.slug === slug);

    if (!project) {

        return <p>Progetto non trovato</p>;
    }

    return (

        <section className="mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto px-4">

            {/* Hero della pagina di dettaglio */}
            <ProjectDetailHero
                title={project.title}
                briefDescription={project.briefDescription}
                heroImage={project.heroImage}
            />

            {/* Tecnologie usate */}
            <ProjectDetailInfoBar
                details={project.details}
                technologies={project.technologies}
            />

            {/* Descrizione progetto */}
            <ProjectDetailContent
                description={project.description}
            />

            {/* Galleria progetto */}
            <ProjectDetailGallery
                key={project.slug}
                gallery={project.gallery}
            />

            <motion.div
                className="flex justify-center gap-4 mt-8 mb-6 flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Link
                    to="/projects"
                    className="border-2 border-rose-400 hover:border-rose-500 text-rose-400 hover:text-rose-500 dark:border-rose-700 
                    dark:text-rose-700 px-8 py-2 font-semibold rounded-full text-center transition-colors duration-700 ease-out 
                    cursor-pointer w-60 md:w-auto md:mb-0"
                >
                    Torna ai progetti
                </Link>

                <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-400 hover:bg-rose-500 dark:bg-rose-700 font-semibold text-white text-md px-8 py-2 shadow-md font-semibold 
                    rounded-full transition-colors duration-700 ease-out cursor-pointer w-60 md:w-auto mb-2 md:mb-0"
                >
                    Vedi repository GitHub
                </a>
            </motion.div>

        </section >
    );
};

export default ProjectDetailsPage;