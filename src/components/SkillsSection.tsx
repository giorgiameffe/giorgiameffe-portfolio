import React from "react";
import skillsData from "../data/skillsData";
import { motion } from "framer-motion"

const SkillsSection: React.FC = () => {

    return (

        <section className="max-w-6xl mx-auto mt-20 px-4">
            <motion.h2
                className="font-bold text-2xl lg:text-3xl text-center lg:text-start mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Competenze tecniche & Soft Skills
            </motion.h2>

            <motion.p
                className="mb-8 text-center lg:text-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
            >
                Mi piace combinare competenze tecniche e soft skills per affrontare il lavoro in modo organizzato e collaborativo.
            </motion.p>


            {/* Hard Skills */}
            <motion.h3
                className="font-bold text-xl mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Hard Skills
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {skillsData.hardSkills.map((group, i) => (
                    <motion.div
                        key={group.title}
                        className={`p-4 rounded-lg ${group.color}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: i * 0.5 // → leggero effetto “uno dietro l’altro”
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h4 className="font-semibold mb-2">{group.title}</h4>
                        <ul className="space-y-1 text-sm">
                            {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Soft Skills */}
            <motion.h3
                className="font-bold text-xl mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Soft Skills
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.softSkills.map((group, i) => (
                    <motion.div
                        key={group.title}
                        className={`p-4 rounded-lg ${group.color}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: i * 0.5 // → leggero effetto “uno dietro l’altro”
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h4 className="font-semibold mb-2">{group.title}</h4>
                        <ul className="space-y-1 text-sm">
                            {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;