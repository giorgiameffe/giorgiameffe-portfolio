import React from "react";
import skillsData from "../data/skillsData";

const SkillsSection: React.FC = () => {

    return (

        <section className="max-w-6xl mx-auto mt-20 px-4">
            <h2 className="font-bold text-3xl mb-6">Competenze tecniche & Soft Skills</h2>

            <p className="mb-8">
                Unisco competenze tecniche e abilità trasversali che mi permettono di lavorare in modo organizzato, preciso e orientato al miglioramento continuo.
            </p>

            {/* Hard Skills */}
            <h3 className="font-bold text-xl mb-3">Hard Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {skillsData.hardSkills.map(group => (
                    <div key={group.title} className={`p-4 rounded-lg dark:border-neutral-700 ${group.color}`}>
                        <h4 className="font-semibold mb-2">{group.title}</h4>
                        <ul className="space-y-1 text-sm">
                            {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Soft Skills */}
            <h3 className="font-bold text-xl mb-3">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.softSkills.map(group => (
                    <div key={group.title} className="p-4 rounded-lg border border-neutral-300 dark:border-neutral-700">
                        <h4 className="font-semibold mb-2">{group.title}</h4>
                        <ul className="space-y-1 text-sm">
                            {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;