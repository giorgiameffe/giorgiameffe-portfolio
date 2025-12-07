import React from "react";
import type { NarrativeBlockData } from "../data/aboutContent";
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
                <motion.img
                    src={isDark ? imageDark : imageLight}
                    alt={`Immagine per la sezione ${title}`}
                    className="w-3/4 md:w-1/2 lg:w-110 h-auto rounded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
            </div>

            {/* Colonna testo */}
            <div className="lg:w-1/2 px-4">
                <h2 className="font-bold text-xl lg:text-2xl text-center lg:text-start mb-3 mt-4">
                    {title}
                </h2>

                <motion.div
                    className="leading-7 lg:leading-8 text-center lg:text-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}>
                    {content}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default NarrativeBlock;