import React, { useContext } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {

    const { isDark } = useContext(GlobalContext);

    const particlesInit = (engine: any) => {
        return loadSlim(engine);
    };


    const particleColors = isDark
        ? ["#3f0876ff", "#101286ff", "#450229", "#872c5eff"]
        : ["#F9A8D4", "#60A5FA", "#f7d976ff", "#A78BFA", "#FBCFE8"];

    return (

        <motion.section
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-center py-16 px-4 overflow-hidden min-h-[300px]"
        >
            {/* Wrapper particelle */}
            <div className="absolute inset-0 w-full h-full">
                {/* Particelle base */}
                <Particles
                    id="particles-cta-base"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: false },
                        particles: {
                            number: { value: 50, density: { enable: true, area: 900 } }, // meno particelle e più spazio
                            color: { value: particleColors },
                            shape: { type: "circle" },
                            opacity: { value: 0.4 },
                            size: { value: { min: 1, max: 5 } }, // più piccole
                            move: { enable: true, speed: 0.5, random: true, straight: false }, // movimento più lento e delicato
                        },
                        detectRetina: true,
                    }}
                    className="w-full h-full"
                />

                {/* Particelle focus sul pulsante */}
                <Particles
                    id="particles-cta-focus"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: false },
                        particles: {
                            number: { value: 50, density: { enable: true, area: 300 } }, // meno particelle per il focus
                            color: { value: particleColors },
                            shape: { type: "circle" },
                            opacity: { value: 0.5 },
                            size: { value: { min: 2, max: 6 } },
                            move: {
                                enable: true,
                                speed: 0.6,
                                random: true,
                                straight: false,
                                direction: "none",
                                outModes: { default: "out" },
                            },
                        },
                        detectRetina: true,
                    }}
                    className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-32"
                />
            </div>

            {/* Contenuti sopra il canvas */}
            <motion.h2
                className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-200 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Parliamo del tuo prossimo progetto!
            </motion.h2>

            <motion.div
                className="text-lg leading-relaxed mb-8 text-gray-800 dark:text-gray-200 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p>Hai un’idea o un progetto da realizzare?</p>
                <p>Mi piacerebbe aiutarti a trasformarlo in un’esperienza digitale chiara, semplice e curata.</p>
                <p>Diamo vita insieme a qualcosa di unico!</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Link to="/contacts" className="inline-flex items-center gap-2 font-semibold text-white bg-rose-400 dark:bg-rose-700 
                px-8 py-3 rounded-full transition-transform duration-300 hover:-translate-y-1 relative z-10">
                    📩 Contattami
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default CTASection;