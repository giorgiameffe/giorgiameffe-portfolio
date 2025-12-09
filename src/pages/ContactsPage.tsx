import React from "react";
import { motion } from "framer-motion";

const ContactsPage: React.FC = () => {

    return (
        <div className="mt-10 lg:mt-20">

            {/* Titolo animato con Framer Motion*/}
            <motion.h1
                className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center"
                initial={{ opacity: 0, y: -30 }} // Inizio un po' più in alto
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Costruiamo qualcosa insieme
            </motion.h1>

        </div>
    )
}

export default ContactsPage;