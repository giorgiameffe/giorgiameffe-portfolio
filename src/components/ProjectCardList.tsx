import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProjectCardList: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3); // default desktop

    // Imposta il numero di card visibili in base alla larghezza
    useEffect(() => {

        function handleResize() {

            if (window.innerWidth < 768) {
                setCardsPerView(1); // mobile
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2); // tablet
            } else {
                setCardsPerView(3); // desktop
            }
        }

        handleResize(); // chiamata iniziale
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Funzione per gestire il passaggio alla card successiva (con ciclicità)
    function nextCard() {

        if (currentIndex < projects.length - cardsPerView) {

            setCurrentIndex(currentIndex + 1);
        } else {

            // Se siamo all'ultima card, torniamo alla prima
            setCurrentIndex(0);
        }
    }

    // Funzione per gestire il passaggio alla card precedente (con ciclicità)
    function prevCard() {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // Se siamo alla prima card, torniamo all'ultima
            setCurrentIndex(projects.length - cardsPerView);
        }
    }

    // Adattiamo il numero di progetti visibili in base all'indice e al numero di card per vista
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

                {/* Navigazione */}
                <div className="flex justify-between items-center mt-4 w-full">

                    {/* Frecce laterali */}
                    <button
                        onClick={prevCard}
                        className=" lg:hidden absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                                    text-rose-400 hover:text-rose-500 shadow-md hover:bg-white transition"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextCard}
                        className="lg:hidden absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                                    text-rose-400 hover:text-rose-500 shadow-md hover:bg-white transition"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

        </section>
    );
};

export default ProjectCardList;