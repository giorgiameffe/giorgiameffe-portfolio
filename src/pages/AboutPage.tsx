import React from "react";
import NarrativeBlockList from "../components/NarrativeBlockList";
import SkillsSection from "../components/SkillsSection";
import PersonalBlock from "../components/PersonalBlock";
import personalBlockData from "../data/personalBlockData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {

    return (

        <section className="mt-10 lg:mt-20">

            {/* Titolo animato con Framer Motion*/}
            <motion.h1
                className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center"
                initial={{ opacity: 0, y: -30 }} // Inizio un po' più in alto
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Dall’estetica al codice: la mia storia
            </motion.h1>

            <NarrativeBlockList />
            <SkillsSection />

            <motion.h2
                className="mt-15 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Momenti quotidiani
            </motion.h2>

            <PersonalBlock
                title={personalBlockData.title}
                content={personalBlockData.content}
                imageDark={personalBlockData.imageDark}
                imageLight={personalBlockData.imageLight}
            />

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-20 px-4 min-h-[300px]"
            >
                <motion.p
                    className="text-lg leading-relaxed mb-8 text-gray-800 dark:text-gray-200 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Se vuoi collaborare o semplicemente fare due chiacchiere su progetti e idee, scrivimi!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/contacts" className="inline-flex items-center font-semibold text-white bg-rose-400 dark:bg-rose-700 
                px-8 py-2 text-lg rounded-full transition-transform duration-300 hover:-translate-y-1 relative z-10">
                        Contattami
                    </Link>
                </motion.div>
            </motion.div>

        </section>
    )
}

export default AboutPage;