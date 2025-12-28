import React from "react";
import { useState } from "react";

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

    const { mediaUrl, type, caption } = gallery[currentIndex];

    return (

        <section className="flex flex-col items-center max-w-3xl mx-auto">

            <h2 className="font-bold text-2xl mb-4">
                Galleria & Demo
            </h2>

            {/* Galleria - Immagine/Video */}
            <div className="relative">

                {type === "image" ? (
                    <img src={mediaUrl} alt={caption} className="rounded-lg shadow-lg" />
                ) : (
                    <video className="rounded-lg shadow-lg mx-auto" controls>
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                {/* Descrizione immagine/video */}
                <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
                    {caption}
                </p>

            </div>

            {/* Navigazione */}
            <div className="flex justify-between items-center mt-4 w-full">

                <button onClick={prevItem} className="px-4 py-2">
                    Precedente
                </button>

                <div className="flex gap-2">
                    {gallery.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-rose-500" : "bg-gray-400"}`}
                        />
                    ))}
                </div>

                <button onClick={nextItem} className="px-4 py-2">
                    Successivo
                </button>

            </div>
        </section>
    );
};

export default ProjectDetailGallery;