import React from "react";
import ProjectDetailHero from "../components/ProjectDetailHero";
import ProjectDetailInfoBar from "../components/ProjectDetailInfoBar";
import ProjectDetailContent from "../components/ProjectDetailContent";
import ProjectDetailGallery from "../components/ProjectDetailGallery";
import { useParams } from "react-router-dom";
import ProjectsDetail from "../data/projectsDetailData";

const ProjectDetailsPage: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();

    const project = ProjectsDetail.find(project => project.slug === slug);

    if (!project) {

        return <p>Progetto non trovato</p>;
    }

    return (

        <section className="mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto px-4">

            {/* Hero della pagina di dettaglio */}
            <ProjectDetailHero
                title={project.title}
                briefDescription={project.briefDescription}
                heroImage={project.heroImage}
            />

            {/* Tecnologie usate */}
            <ProjectDetailInfoBar
                details={project.details}
                technologies={project.technologies}
            />

            {/* Descrizione progetto */}
            <ProjectDetailContent
                description={project.description}
            />

            {/* Galleria progetto */}
            <ProjectDetailGallery gallery={project.gallery} />

        </section>
    );
};

export default ProjectDetailsPage;