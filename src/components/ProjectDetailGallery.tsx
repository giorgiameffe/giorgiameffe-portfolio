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

const ProjectDetailGallery: React.FC<ProjectDetailGalleryProps> = () => {

    return (

        <div>Sono la galleria della pagina dettaglio</div>
    )
}

export default ProjectDetailGallery;