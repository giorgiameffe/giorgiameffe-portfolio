import React from "react";
import margotImage from "../assets/margot-404.png";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {

    return (

        <section className="flex items-center min-h-screen flex-col">

            <img
                src={margotImage}
                alt="Immagine di un gatto per la pagina 404"
                className="w-80"
            />

            <div className="text-center">
                <h1 className="font-bold text-2xl lg:text-3xl mb-2">404 - Pagina non trovata</h1>
                <p className="lg:text-lg mb-2">
                    Forse Margot ha messo una zampa dove non doveva..🐾
                </p>

                <Link
                    to="/projects"
                    className="inline-block bg-rose-400 hover:bg-rose-500 dark:bg-rose-700 font-semibold text-white text-md px-8 py-2 shadow-md font-semibold 
                            rounded-full transition-colors duration-700 ease-out cursor-pointer w-60 md:w-auto mb-2 md:mb-0"
                >
                    Torna alla home
                </Link>

            </div>

        </section>
    )
}

export default NotFoundPage;