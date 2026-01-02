import React from "react";
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {

    return (

        <section className="min-h-screen mt-12 md:mt-16 lg:mt-20 mb-20 px-4">

            {/* Contenitore principale della pagina */}
            <div className="max-w-6xl mx-auto">

                {/* Titolo animato con Framer Motion*/}
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-gray-200 mb-6 text-center"
                    initial={{ opacity: 0, y: -30 }} // Inizio un po' più in alto
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Dall’idea all’interfaccia: i miei progetti
                </motion.h1>

                <div className="max-w-2xl md:max-w-xl mx-auto text-center mb-12 md:flex md:justify-center md:items-center">

                    {/* Testo animato con Framer Motion */}
                    <motion.p
                        className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed relative 
                                     pt-4 pb-6 px-4 mb-2 md:mb-0 "
                        initial={{ opacity: 0, x: 50 }} // Inizio trasparente e spostato 50px a destra
                        animate={{ opacity: 1, x: 0 }} // Finale visibile e posizione normale
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Delay 0.3s
                    >
                        Dove il codice prende <strong>vita</strong> e il design guida l'<strong>esperienza</strong>:
                        esplora i progetti in cui semplicità e cura dei dettagli incontrano la <strong>passione</strong> per la UX/UI.
                    </motion.p>
                </div>

                {/* Griglia dei progetti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {/* Itera su projects e mostra ogni ProjectCard */}
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} featured={false} />
                    ))}
                </div>
            </div>
        </section >
    );
};

export default ProjectsPage;