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
            className={`mt-20 flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto
            ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
            {/* Colonna Immagine */}
            <div className="flex justify-center lg:w-1/2">
                <img
                    src={isDark ? imageDark : imageLight}
                    alt={`Immagine per la sezione ${title}`}
                    className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-110 h-auto rounded"
                />
            </div>

            {/* Colonna testo */}
            <div className="lg:w-1/2 px-4">
                <h2 className="font-bold text-2xl mb-4">{title}</h2>
                <div className="leading-8">{content}</div>
            </div>
        </section>

    )

}

export default NarrativeBlock;