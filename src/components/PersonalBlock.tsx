import type React from "react";
import type { PersonalBlockData } from "../data/personalBlockData";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";

const PersonalBlock: React.FC<PersonalBlockData> = ({
    title,
    content,
    imageLight,
    imageDark
}) => {

    const { isDark } = useContext(GlobalContext);

    return (

        <section
            className="mt-10 lg:mt-20 flex flex-col lg:flex-row items-start justify-center w-full max-w-6xl mx-auto"
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
                <h2 className="font-bold text-xl lg:text-2xl text-center lg:text-start mb-3 mt-4">
                    {title}
                </h2>

                <div className="leading-7 lg:leading-8 text-center lg:text-start">
                    {content}
                </div>
            </div>
        </section>
    )

}

export default PersonalBlock;