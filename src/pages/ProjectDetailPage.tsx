import React from "react";
import ProjectsDetailHero from "../components/ProjectDetailHero";

const ProjectDetailsPage: React.FC = () => {

    return (

        <section className="mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
            <h1 className="font-bold">Sono nella pagina Dettagli Progetto</h1>
            <ProjectsDetailHero />
        </section>
    )
}

export default ProjectDetailsPage;