import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Tipo per ogni elemento della galleria (può essere un'immagine o un video)
interface GalleryItem {
    mediaUrl: string;
    type: "image" | "video";
    caption: string;
}

interface ProjectDetailGalleryProps {
    gallery: GalleryItem[]
}

const ProjectDetailGallery: React.FC<ProjectDetailGalleryProps> = ({ gallery }) => {

    // Stato per tracciare l'immagine/video attivo
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextItem() {

        if (currentIndex < gallery.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Torna al primo elemento se sei all'ultimo
        }
    };

    function prevItem() {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(gallery.length - 1); // Torna all'ultimo elemento se sei al primo
        }
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [gallery]);

    const { mediaUrl, type, caption } = gallery[currentIndex];

    return (

        <section className="flex flex-col items-center max-w-6xl mx-auto relative">

            <h2 className="font-bold text-2xl mb-4">
                Galleria & Demo
            </h2>

            {/* Galleria - Immagine/Video */}
            <div className="max-w-5xl">

                {type === "image" ? (
                    <img
                        key={currentIndex}
                        src={mediaUrl}
                        alt={caption}
                        className="rounded-lg shadow-lg w-full"
                    />
                ) : (
                    <video
                        key={currentIndex}
                        className="rounded-lg shadow-lg mx-auto w-full"
                        controls
                    >
                        <source src={mediaUrl} type="video/mp4" />
                    </video>
                )}

                {/* Descrizione immagine/video */}
                <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
                    {caption}
                </p>

            </div>

            {/* Navigazione */}
            <div className="flex justify-between items-center mt-4 w-full">

                {/* Frecce laterali */}
                <button
                    onClick={prevItem}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 text-xl"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextItem}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 text-xl"
                >
                    <FaArrowRight />
                </button>

            </div>
        </section>
    );
};

export default ProjectDetailGallery;