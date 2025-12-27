import React from "react";

interface ContentProps {
    description: {
        scopeAndGoal: string;
        personalTechnicalChallenges: string[];
        keyLearnings: string;
    };
}

const ProjectDetailContent: React.FC<ContentProps> = ({ description }) => {

    return (

        <section className="mb-12">

            {/* Sezione obiettivo e scopo */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-start">
                    Obiettivo e scopo
                </h2>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {description.scopeAndGoal}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Sezione sfide tecniche */}
                <div className="lg:col-span-7">
                    <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center md:text-start">
                        Sfide tecniche personali
                    </h3>
                    <ul className="space-y-6">
                        {description.personalTechnicalChallenges.map((challenge, index) => (
                            <li key={index} className="flex items-center gap-4">
                                {/* Un piccolo pallino stilizzato */}
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                                <p className="leading-relaxed">
                                    {challenge}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sezione key learnings */}
                <div className="lg:col-span-5">
                    <div className="bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">💡</span> Risultati e apprendimenti
                        </h3>
                        <p className="text-gray-700 dark:text-gray-400 italic leading-relaxed">
                            "{description.keyLearnings}"
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectDetailContent;