import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
                    className="absolute left-[-1rem] md:left-[-1rem] top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                    text-rose-400 hover:text-rose-500 shadow-md hover:bg-white transition"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={nextItem}
                    className="absolute right-[-1rem] md:righ-[-rem] top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full 
                    text-rose-400 hover:text-rose-500 shadow-md hover:bg-white transition"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Indicatori (pallini) */}
            <div className="flex gap-2">
                {gallery.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-rose-400 dark:bg-rose-500" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                        aria-label={`Vai alla slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
};

export default ProjectDetailGallery;