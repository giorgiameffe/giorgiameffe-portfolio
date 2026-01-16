import React from "react";
import type { NarrativeBlockData } from "../data/narrativeBlockData";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { motion } from "framer-motion";

const NarrativeBlock: React.FC<NarrativeBlockData> = ({
    title,
    content,
    imageLight,
    imageDark,
    reverse
}) => {

    const { isDark } = useContext(GlobalContext);

    return (

        <motion.section
            className={`mt-10 lg:mt-20 flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto
            ${reverse ? "lg:flex-row-reverse" : ""}`}
            // Stato iniziale dell’elemento prima che entri in vista:
            // - opacity 0: invisibile
            // - y 20: leggermente spostato verso il basso
            initial={{ opacity: 0, y: 20 }}
            // Stato dell’elemento quando entra nel viewport:
            // - opacity 1: completamente visibile
            // - y 0: torna nella posizione originale
            whileInView={{ opacity: 1, y: 0 }}
            // Impostazioni del trigger:
            // - once: true → l’animazione parte solo la prima volta che l’elemento entra in vista
            // - amount: 0.3 → l’animazione si attiva quando il 30% dell’elemento è visibile
            viewport={{ once: true, amount: 0.3 }}
            // Configurazione della transizione:
            // - duration 0.6s: durata dell’animazione
            // - ease "easeOut": velocità fluida che rallenta verso la fine
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Colonna Immagine */}
            <div className="flex justify-center lg:w-1/2">
                <img
                    src={isDark ? imageDark : imageLight}
                    alt={`Immagine per la sezione ${title}`}
                    className="w-3/4 md:w-1/2 lg:w-110 h-auto rounded"
                />
            </div>

            {/* Colonna testo */}
            <div className="lg:w-1/2 px-4">
                <h2 className="font-bold text-xl md:text-2xl text-center lg:text-start mb-2 mt-3 lg:mt-0">
                    {title}
                </h2>

                <p
                    className="leading-7 lg:leading-7.5 text-center lg:text-start"
                >
                    {content}
                </p>
            </div>
        </motion.section>
    )
}

export default NarrativeBlock;