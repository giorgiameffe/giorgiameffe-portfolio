import projects from "../data/projects"; // Import dei dati dei progetti
import ProjectCard from "../components/ProjectCard"; // Componente per singolo progetto
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext"; // Context globale per dark mode
import { motion } from "framer-motion"; // Framer Motion per animazioni declarative

const ProjectsPage = () => {

    const { isDark } = useContext(GlobalContext); // Prendo lo stato isDark dal context

    return (
        <section className="min-h-screen mt-6 md:mt-10 lg:mt-20 pb-20 px-4">
            {/* Contenitore principale della pagina */}
            <div className="max-w-6xl mx-auto">

                {/* ---------------- Titolo + Intro ---------------- */}
                <div className="max-w-2xl mx-auto text-center mb-12 md:flex md:justify-center md:items-center">

                    {/* Immagine animata con Framer Motion */}
                    <motion.img
                        src={isDark ? "/img/giorgia-projects-dark.png" : "/img/giorgia-projects-light.png"} // immagine light/dark
                        alt="Foto personale"
                        className="w-55 md:w-65 lg:w-75 lg:mr-20 h-auto mx-auto"
                        initial={{ opacity: 0, x: -50 }} // Stato iniziale: trasparente e spostata 50px a sinistra
                        animate={{ opacity: 1, x: 0 }} // Stato finale: visibile e posizione originale
                        transition={{ duration: 0.8, ease: "easeOut" }} // Durata 0.8s, easing naturale
                    />

                    {/* Testo animato con Framer Motion */}
                    <motion.p
                        className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: 50 }} // Inizio trasparente e spostato 50px a destra
                        animate={{ opacity: 1, x: 0 }} // Finale visibile e posizione normale
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Delay 0.3s rispetto all'immagine
                    >
                        Qui trovi una raccolta dei progetti che ho realizzato nel mio percorso...
                    </motion.p>
                </div>

                {/* ---------------- Griglia dei progetti ---------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {/* Itera su projects e mostra ogni ProjectCard */}
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} featured={false} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;