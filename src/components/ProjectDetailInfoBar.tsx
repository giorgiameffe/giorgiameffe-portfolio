import React from "react";
import skillsData from "../data/skillsData";

interface InfoBarProps {
    details: {
        role: string;
        duration: string;
        status: string;
        team: string;
    };
    technologies: string[];
}

// Creiamo una mappa vuota che assocerà ogni tecnologia al suo colore.
// La chiave è il nome della tecnologia (string), il valore è la classe Tailwind (string)
const techColors: Record<string, string> = {};

// Cicliamo su tutti i gruppi di hardSkills definiti in skillsData
skillsData.hardSkills.forEach(group => {
    // Cicliamo tutte le singole tecnologie dentro il gruppo corrente
    group.skills.forEach(skill => {
        // Assegniamo alla tecnologia corrente il colore del gruppo
        techColors[skill] = group.color ?? "border-gray-400 text-gray-600";
    });
});

const ProjectDetailInfoBar: React.FC<InfoBarProps> = ({
    details,
    technologies
}) => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">

            {/* Sezione dettagli del progetto */}
            <section>
                <h2 className="text-lg font-semibold mb-3">Dettagli progetto</h2>
                <ul className="space-y-2 text-sm">
                    <li>
                        <span className="font-medium mr-1">Ruolo:</span>
                        {details.role}
                    </li>
                    <li>
                        <span className="font-medium mr-1">Durata:</span>
                        {details.duration}
                    </li>
                    <li>
                        <span className="font-medium mr-1">Stato:</span>
                        {details.status}
                    </li>
                    <li>
                        <span className="font-medium mr-1">Tipo:</span>
                        {details.team}
                    </li>
                </ul>
            </section>

            {/* Stack tecnologico */}
            <section>
                <h2 className="text-lg font-semibold mb-3">Stack tecnologico</h2>
                <ul className="grid grid-cols-2 gap-2">
                    {technologies.map(t => (
                        <li
                            key={t}
                            className={`${techColors[t] ?? "border-gray-400 text-gray-600"} px-2 py-1.5 border rounded-full text-sm text-center`}
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            </section>

        </div>

    )
}

export default ProjectDetailInfoBar;