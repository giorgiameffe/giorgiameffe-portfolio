import React from "react";
import type { NarrativeBlockData } from "../data/aboutContent";

const NarrativeBlock: React.FC<NarrativeBlockData> = ({
    title,
    content,
    image
}) => {

    return (

        <section className="mt-6">
            {/* Colonna Immagine */}
            <div>
                <img src={image} alt={`Immagine per la sezione ${title}`} />
            </div>

            {/*Colonna testo */}
            <div>
                <h2>{title}</h2>
                <p>
                    {content}
                </p>
            </div>

        </section>
    )

}

export default NarrativeBlock;