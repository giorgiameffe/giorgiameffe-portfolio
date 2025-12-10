import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const ContactsPage: React.FC = () => {

    return (

        <section className="min-h-screen mt-12 md:mt-16 lg:mt-20 mb-20 px-4">

            {/* Contenitore principale */}
            <div className="max-w-6xl mx-auto">

                {/* Titolo con animazione */}
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-gray-200 mb-6 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Costruiamo qualcosa insieme!
                </motion.h1>

                {/* Sottotitolo animato */}
                <div className="max-w-2xl md:max-w-xl mx-auto text-center mb-12 md:flex md:justify-center md:items-center">
                    <motion.p
                        className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed relative 
                       pt-4 pb-6 px-4 mb-2 md:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Hai un’idea, un progetto o semplicemente una domanda?
                        Scrivimi tramite il form o contattami sui miei social.
                        <br />
                        <strong> Sarò felice di ascoltarti!🌸</strong>
                    </motion.p>
                </div>

                <ContactForm />

            </div>
        </section>
    );
};

export default ContactsPage;