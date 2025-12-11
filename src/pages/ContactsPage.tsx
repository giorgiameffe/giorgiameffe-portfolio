import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, } from "react-icons/fa";

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
                <div className="max-w-2xl md:max-w-xl mx-auto text-center mb-6 md:flex md:justify-center md:items-center">
                    <motion.p
                        className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed relative 
                       pt-4 pb-6 px-4 mb-2 md:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Hai un’idea, un progetto o semplicemente una domanda?
                        <br />
                        Puoi contattarmi tramite i miei social oppure inviarmi un messaggio attraverso il form qui sotto.
                        <br />
                        <strong> Sarò felice di ascoltarti!🌸</strong>
                    </motion.p>
                </div>

                {/* Sezione Social + CV */}
                <motion.div
                    className="flex flex-col items-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Icone social */}
                    <div className="flex gap-6 text-3xl">

                        <Link
                            to="https://www.linkedin.com/in/giorgia-meffe-41b23b389"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-rose-400 transition"
                        >
                            <FaLinkedin className="text-2xl" />
                        </Link>

                        <Link
                            to="https://github.com/giorgiameffe"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-rose-400 transition"
                        >
                            <FaGithub className="text-2xl" />
                        </Link>
                    </div>

                    {/* Bottone CV */}
                    <Link
                        to="/"
                        className="inline-block mt-4 bg-rose-400 dark:bg-rose-700 text-white px-8 py-2 font-semibold 
                    rounded-full shadow-md transition cursor-pointer" >
                        Scarica il mio CV
                    </Link>
                </motion.div>

                <ContactForm />

                {/* Call-to-action finale */}
                <motion.div
                    className="text-center text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p className="mb-4 text-lg">
                        Grazie per aver visitato la mia pagina!
                        <br />
                        Non vedo l’ora di collaborare con te e dare vita al tuo progetto.
                    </p>

                    {/* Link ad altre pagine */}
                    <div className="flex justify-center gap-6">
                        <Link
                            to="/projects"
                            className="text-gray-800 dark:text-gray-200 hover:text-rose-400 transition"
                        >
                            Vedi i miei progetti
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-800 dark:text-gray-200 hover:text-rose-400 transition"
                        >
                            Torna alla home
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactsPage;