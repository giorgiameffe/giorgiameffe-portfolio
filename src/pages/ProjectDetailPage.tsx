import React from "react";
import ProjectDetailHero from "../components/ProjectDetailHero";
import ProjectDetailInfoBar from "../components/ProjectDetailInfoBar";

const ProjectDetailsPage: React.FC = () => {

    return (

        <section className="mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
            <h1 className="font-bold">Sono nella pagina Dettagli Progetto</h1>
            <ProjectDetailHero />
            <ProjectDetailInfoBar />
        </section>
    )
}

export default ProjectDetailsPage;