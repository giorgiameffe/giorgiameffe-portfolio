import React from "react";
import { motion } from "framer-motion";

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

        <div className="flex flex-col items-center text-center">
            <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-gray-200 mb-6"
                initial={{ opacity: 0, y: -30 }} // Inizio un po' più in alto
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {title}
            </motion.h1>

            <motion.p
                className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-2 md:mb-12 max-w-3xl"
                initial={{ opacity: 0, x: 50 }} // Inizio trasparente e spostato 50px a destra
                animate={{ opacity: 1, x: 0 }} // Finale visibile e posizione normale
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Delay 0.3s
            >
                {briefDescription}
            </motion.p>

            <img
                src={heroImage}
                alt={title}
                className="mb-8"
            />
        </div>
    );
};

export default ProjectDetailHero;