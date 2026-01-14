import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProjectCardList: React.FC = () => {

    // Indice della prima card visibile nel carosello
    const [currentIndex, setCurrentIndex] = useState(0);

    // Quante card mostriamo contemporaneamente
    // (1 mobile, 2 tablet, 3 desktop)
    const [cardsPerView, setCardsPerView] = useState(3);

    // Calcola cardsPerView in base alla larghezza della finestra
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setCardsPerView(1);       // mobile
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);       // tablet
            } else {
                setCardsPerView(3);       // desktop
            }
        }

        handleResize(); // eseguito subito al mount
        window.addEventListener("resize", handleResize);

        // cleanup quando il componente viene smontato
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Quando cardsPerView cambia (es: mobile → desktop),
    // currentIndex potrebbe diventare invalido
    useEffect(() => {
        const maxIndex = projects.length - cardsPerView;

        // Se currentIndex è troppo alto per il nuovo layout,
        // lo riportiamo a 0
        if (currentIndex > maxIndex) {
            setCurrentIndex(0);
        }
    }, [cardsPerView, projects.length]);

    // Funzione per andare avanti di una card
    function nextCard() {
        if (currentIndex < projects.length - cardsPerView) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // se siamo alla fine, torniamo all’inizio
            setCurrentIndex(0);
        }
    }

    // Funzione per andare indietro di una card
    function prevCard() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // se siamo all’inizio, saltiamo all’ultima finestra valida
            setCurrentIndex(projects.length - cardsPerView);
        }
    }

    // Selezioniamo solo le card che devono essere visibili
    const visibleProjects = projects.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (

        <section className="max-w-6xl mx-auto md:px-18 mb-8 relative">
            <motion.h1
                className="font-extrabold text-3xl md:text-4xl mt-5 mb-6 mt-10 text-center lg:ms-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Progetti in evidenza
            </motion.h1>

            <div className="overflow-hidden">
                <div className="flex justify-center items-center gap-15 md:gap-10 w-full transition-transform duration-300 ease-in-out">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} featured />
                    ))}
                </div>

                {/* Frecce visibili solo su mobile/tablet */}
                <button
                    onClick={prevCard}
                    className="lg:hidden absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                    text-rose-400 dark:text-rose-700 dark:bg-gray-800 hover:text-rose-500 shadow-md hover:bg-white transition"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={nextCard}
                    className="lg:hidden absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                    text-rose-400 dark:text-rose-700 dark:bg-gray-800 hover:text-rose-500 shadow-md hover:bg-white transition"
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default ProjectCardList;