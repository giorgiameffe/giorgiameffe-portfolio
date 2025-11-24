import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

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

    function nextCard() {
        if (currentIndex < projects.length - cardsPerView) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function prevCard() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const visibleProjects = projects.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (

        <section className="max-w-6xl mx-auto md:px-18 mb-8 relative">
            <h1 className="font-extrabold text-4xl mt-5 mb-6 mt-10 text-center lg:ms-10 ">
                Progetti in evidenza
            </h1>

            <div className="overflow-hidden">

                <div className="flex justify-center items-center gap-15 md:gap-10 w-full transition-transform duration-300 ease-in-out">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} featured />
                    ))}
                </div>

                {/* Pulsanti carosello visibili solo su mobile/tablet */}
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className="lg:hidden absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                    ←
                </button>

                <button
                    onClick={nextCard}
                    disabled={currentIndex >= projects.length - cardsPerView}
                    className="lg:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default ProjectCardList;