import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCardList from "../components/ProjectCardList";

const HomePage: React.FC = () => {

    return (

        <div>
            <HeroSection
                title="Ciao, sono Giorgia!"
                subtitle="Junior Front-End developer con focus su Component Design e appassionata di UX/UI."
                description={<>
                    Trasformo idee in interfacce funzionali e curate.<br />
                    Scopri come unisco design e codice per dare vita ai tuoi progetti.
                </>}
            />
            <ProjectCardList />
        </div>
    )
}

export default HomePage;