import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const CTASection: React.FC = () => {

    const particlesInit = async (engine: any) => {
        await loadSlim(engine); // particelle leggere
    };

    return (

        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative text-center py-16 px-4 overflow-hidden min-h-[300px]"
        >
            {/* Wrapper per confinare il canvas */}
            <div className="absolute inset-0 w-full h-full">
                <Particles
                    id="particles-cta"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: false }, // essenziale: limita il canvas alla sezione
                        particles: {
                            number: { value: 80, density: { enable: true, area: 800 } },
                            color: { value: ["#F9A8D4", "#60A5FA", "#f7d976ff", "#A78BFA", "#FBCFE8"] },
                            shape: { type: "circle" },
                            opacity: { value: 0.6 },
                            size: { value: { min: 0.5, max: 4.5 } },
                            move: { enable: true, speed: 0.5, direction: "none", random: true, straight: false },
                        },
                        interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
                        detectRetina: true,
                    }}
                    className="w-full h-full"
                />
            </div>

            {/* Contenuti sopra il canvas */}
            <h2 className="text-4xl font-bold mb-4 text-gray-900 relative z-10">
                Parliamo del tuo prossimo progetto!
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-800 relative z-10">
                Hai un’idea o un progetto da realizzare?
                <p>
                    Mi piacerebbe aiutarti a trasformarlo in un’esperienza digitale chiara, semplice e curata.
                </p>
                <p>
                    Diamo vita insieme a qualcosa di unico!
                </p>
            </p>
            <a
                href="/contatti"
                className="inline-flex items-center gap-2 font-inter font-semibold text-white bg-rose-400 px-8 py-3 rounded-full transition-transform duration-300 hover:-translate-y-1 relative z-10"
            >
                📩 Contattami
            </a>
        </motion.section>
    );
};

export default CTASection;
