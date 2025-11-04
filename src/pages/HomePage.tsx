import React from "react";
import HeroSection from "../components/HeroSection";

const HomePage: React.FC = () => {

    return (
        <div>
            <HeroSection
                title="Ciao, sono Giorgia"
                subtitle="Junior Front-end developer, con focus su Component Design e appassionata di UX/UI."
                description="Amo trasformare idee in interfacce curate e funzionali, dove il design incontra il codice."
            />
        </div>
    )
}

export default HomePage;