import React from "react";
import NarrativeBlockList from "../components/NarrativeBlockList";
import SkillsSection from "../components/SkillsSection";

const AboutPage: React.FC = () => {

    return (

        <div className="mt-10 lg:mt-20">
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">Dall’estetica al codice: la mia storia</h1>
            <NarrativeBlockList />
            <SkillsSection />
        </div>
    )
}

export default AboutPage;