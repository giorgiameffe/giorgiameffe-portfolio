import React from "react";
import { motion } from "framer-motion";

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
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Obiettivo e scopo
                </h2>
                <p className="text-lg md:text-xl text-center md:text-start text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {description.scopeAndGoal}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Sezione sfide tecniche */}
                <motion.div
                    className="lg:col-span-7"
                    // Stato iniziale dell’elemento prima che entri in vista:
                    // - opacity 0: invisibile
                    // - y 20: leggermente spostato verso il basso
                    initial={{ opacity: 0, y: 20 }}
                    // Stato dell’elemento quando entra nel viewport:
                    // - opacity 1: completamente visibile
                    // - y 0: torna nella posizione originale
                    whileInView={{ opacity: 1, y: 0 }}
                    // Impostazioni del trigger:
                    // - once: true → l’animazione parte solo la prima volta che l’elemento entra in vista
                    // - amount: 0.3 → l’animazione si attiva quando il 30% dell’elemento è visibile
                    viewport={{ once: true, amount: 0.3 }}
                    // Configurazione della transizione:
                    // - duration 0.6s: durata dell’animazione
                    // - ease "easeOut": velocità fluida che rallenta verso la fine
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center md:text-start">
                        Sfide tecniche personali
                    </h3>
                    <ul className="list-disc list-inside space-y-6 marker:text-rose-400 dark:text-rose-700">
                        {description.personalTechnicalChallenges.map((challenge, index) => (
                            <li key={index} className="leading-relaxed pl-2 text-gray-800 dark:text-gray-200">
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Sezione key learnings */}
                <motion.div
                    className="lg:col-span-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    <div className="bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-2xl">💡</span> Risultati e apprendimenti
                        </h3>
                        <p className="text-gray-700 dark:text-gray-400 italic leading-relaxed">
                            "{description.keyLearnings}"
                        </p>
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

export default ProjectDetailContent;

//  <ul className="space-y-6">
//                         {description.personalTechnicalChallenges.map((challenge, index) => (
//                             <li key={index} className="flex items-center gap-4">
//                                 {/* Un piccolo pallino stilizzato */}
//                                 <span className="mt-2.5 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
//                                 <p className="leading-relaxed">
//                                     {challenge}
//                                 </p>
//                             </li>
//                         ))}
//                     </ul>