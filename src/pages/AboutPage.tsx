import React from "react";
import NarrativeBlockList from "../components/NarrativeBlockList";
import SkillsSection from "../components/SkillsSection";
import PersonalBlock from "../components/PersonalBlock";
import personalBlockData from "../data/personalBlockData";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {

    return (

        <div className="mt-10 lg:mt-20">

            {/* Titolo animato con Framer Motion*/}
            <motion.h1
                className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center"
                initial={{ opacity: 0, y: -30 }} // Inizio un po' più in alto
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Dall’estetica al codice: la mia storia
            </motion.h1>

            <NarrativeBlockList />
            <SkillsSection />

            <PersonalBlock
                title={personalBlockData.title}
                content={personalBlockData.content}
                imageDark={personalBlockData.imageDark}
                imageLight={personalBlockData.imageLight}
            />
        </div>
    )
}

export default AboutPage;