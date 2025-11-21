import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {

    return (
        <section className="min-h-screen pt-20 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Titolo + intro */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Progetti</h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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