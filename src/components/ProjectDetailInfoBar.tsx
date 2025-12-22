import React from "react";

interface InfoBarProps {
    details: {
        role: string;
        duration: string;
        status: string;
        team: string;
    };
    technologies: string[];
    links: {
        github: string;
        githubBackend?: string;
    };
}

const ProjectDetailInfoBar: React.FC<InfoBarProps> = ({
    details
}) => {

    return (

        <div>
            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-1">Dettagli rapidi</h2>
                <ul className="leading-relaxed">
                    <li>
                        <span className="font-semibold mr-1">Ruolo:</span>
                        {details.role}
                    </li>
                    <li>
                        <span className="font-semibold mr-1">Durata:</span>
                        {details.duration}
                    </li>
                    <li>
                        <span className="font-semibold mr-1">Stato:</span>
                        {details.status}
                    </li>
                    <li>
                        <span className="font-semibold mr-1">Tipo di progetto:</span>
                        {details.team}
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ProjectDetailInfoBar;