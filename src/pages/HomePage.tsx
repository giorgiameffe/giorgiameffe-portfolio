import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCardList from "../components/ProjectCardList";
import CTASection from "../components/CTASection";

const HomePage: React.FC = () => {

    return (

        <div>
            <HeroSection
                title="Ciao, sono Giorgia!"
                subtitle="Junior Front-End Developer che crede nella bellezza delle cose semplici."
                description={
                    <>
                        Creo interfacce eleganti e funzionali, dove la logica del codice incontra la bellezza del design.
                    </>

                }
            />
            <ProjectCardList />
            <CTASection />
        </div>
    )
}

export default HomePage;