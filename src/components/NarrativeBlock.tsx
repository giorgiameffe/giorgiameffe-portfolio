import React from "react";
import type { NarrativeBlockData } from "../data/aboutContent";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


const NarrativeBlock: React.FC<NarrativeBlockData> = ({
    title,
    content,
    imageLight,
    imageDark
}) => {

    const { isDark } = useContext(GlobalContext);

    return (

        <section className="mt-6">
            {/* Colonna Immagine */}
            <div>
                <img
                    src={isDark ? imageDark : imageLight}
                    alt={`Immagine per la sezione ${title}`}
                    className="lg:w-100" />
            </div>

            {/*Colonna testo */}
            <div>
                <h2>{title}</h2>
                <div>{content}</div>
            </div>

        </section>
    )

}

export default NarrativeBlock;