import type React from "react";
import type { PersonalBlockData } from "../data/personalBlockData";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const PersonalBlock: React.FC<PersonalBlockData> = ({
    title,
    content,
    imageLight,
    imageDark
}) => {

    const { isDark } = useContext(GlobalContext);

    return (

        <motion.section
            className="mt-10 lg:mt-15 flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
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
                    transition={{ duration: 0.6, delay: 0.2 }}
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
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {content}
                </motion.div>
            </div>
        </motion.section>
    )

}

export default PersonalBlock;