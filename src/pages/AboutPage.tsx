import React from "react";
import NarrativeBlocks from "../data/aboutContent";
import NarrativeBlock from "../components/NarrativeBlock";

const AboutPage: React.FC = () => {

    return (

        <div className="lg:mt-20">
            <h1 className="font-extrabold lg:text-4xl">Sono nella pagina About</h1>
            {NarrativeBlocks.map(block => (
                <NarrativeBlock
                    key={block.id}
                    {...block} />
            ))}
        </div>
    )
}

export default AboutPage;