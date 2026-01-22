import React from "react";
import margotImage from "../assets/margot-404.png";

const NotFoundPage: React.FC = () => {

    return (

        <section className="flex justify-center items-center min-h-screen flex-col">

            <img
                src={margotImage}
                alt="Immagine di un gatto per la pagina 404"
                className="w-80"
            />

        </section>
    )
}

export default NotFoundPage;