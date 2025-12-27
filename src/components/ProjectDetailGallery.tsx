import React from "react";

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

    return (

        <section>

            <h2 className="text-2xl font-bold mb-4 text-center">
                Galleria & Demo
            </h2>

            {gallery.map((item, index) => (
                <div key={index}>
                    {item.type === "image" ? (
                        <img src={item.mediaUrl} alt={item.caption} />
                    ) : (
                        <video>
                            Sono un video
                        </video>
                    )}
                    <p>{item.caption}</p>
                </div>
            ))}

        </section>
    )
}

export default ProjectDetailGallery;