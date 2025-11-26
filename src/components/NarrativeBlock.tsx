import React from "react";
import type { NarrativeBlockData } from "../data/aboutContent";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


const NarrativeBlock: React.FC<NarrativeBlockData> = ({
    title,
    content,
    imageLight,
    imageDark,
    reverse
}) => {

    const { isDark } = useContext(GlobalContext);

    return (

        <section
            className={`mt-15 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
            {/* Colonna Immagine */}
            <div className="w-90">
                <img
                    src={isDark ? imageDark : imageLight}
                    alt={`Immagine per la sezione ${title}`}
                />
            </div>

            {/*Colonna testo */}
            <div className="w-1/2">
                <h2>{title}</h2>
                <div>{content}</div>
            </div>

        </section>
    )

}

export default NarrativeBlock;