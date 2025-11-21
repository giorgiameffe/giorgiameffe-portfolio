import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const ProjectsPage = () => {

    const { isDark } = useContext(GlobalContext);

    return (

        <section className="min-h-screen mt-6 md:mt-10 lg:mt-20 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Titolo + intro */}
                <div className="max-w-2xl mx-auto text-center mb-12 md:flex md:justify-center md:items-center">
                    <img
                        src={isDark ? "/img/giorgia-projects-dark.png" : "/img/giorgia-projects-light.png"}
                        alt="Foto personale"
                        className="w-55 md:w-65 lg:w-75 lg:mr-20 h-auto mx-auto"
                    />
                    <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                        Qui trovi una raccolta dei progetti che ho realizzato nel mio percorso...
                    </p>
                </div>

                {/* Griglia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} featured={false} />
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ProjectsPage;