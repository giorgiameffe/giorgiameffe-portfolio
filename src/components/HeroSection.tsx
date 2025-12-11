// IMPORTAZIONI
// Particles: componente React per mostrare le particelle animate
import Particles from "react-tsparticles";

// loadSlim: carica il "motore slim" delle particelle, cioè la versione leggera con le funzionalità base
// senza plugin extra. Necessario per far funzionare le particelle.
import { loadSlim } from "tsparticles-slim";

// Engine: tipo TypeScript che rappresenta il motore delle particelle
// Contiene tutto ciò che serve per gestire canvas, animazioni, forme, colori ecc.
import type { Engine } from "tsparticles-engine";

import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// type per HeroSection
type HeroSectionProps = {
    title: string;
    subtitle: string;
    description: ReactNode;
    imageUrl?: string;
};

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {

    // Funzione di inizializzazione del motore delle particelle
    const particlesInit = (engine: Engine) => {
        // 'engine' è il motore che gestisce creazione e animazione delle particelle
        // 'loadSlim' carica la versione leggera del motore (solo funzioni base)
        // Restituisce una Promise, gestita automaticamente da <Particles>
        return loadSlim(engine);
    };

    const { isDark } = useContext(GlobalContext);

    return (

        <motion.section // 1. Stato Iniziale: Solo opacità 0
            initial={{ opacity: 0 }}

            // 2. Stato Finale: Opacità 1 (appare)
            animate={{ opacity: 1 }}

            // 3. Transizione: Lenta e fluida
            transition={{
                duration: 1, // Aumentiamo la durata per renderlo più "calmo"
                ease: "easeInOut"
            }}
            className="relative bg-gradient-to-br from-[#80d0ff] via-[#c8a8ff] to-[#ffb5a7] dark:from-[#050231] 
        dark:via-[#240236] dark:to-[#450229] min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-3 px-6 py-4 
        text-center md:text-left overflow-hidden opacity-0 animate-fadeIn">

            {/* Stelle animate */}
            <Particles
                id="tsparticles" // ID unico del componente
                init={particlesInit} // Funzione chiamata da Particles per inizializzare il motore
                className="absolute inset-0" // Il canvas copre tutta la sezione
                options={{
                    fullScreen: { enable: false }, // Non usare canvas a schermo intero, solo nella sezione
                    background: { color: "transparent" }, // Sfondo trasparente
                    particles: {
                        number: { value: 150, density: { enable: true, area: 800 } }, // Numero di particelle
                        color: { value: ["#ffffff", "#ffe6ff", "#e0ffff"] }, // Colori delle stelle
                        shape: { type: "circle" }, // Forma: cerchio
                        opacity: {
                            value: 0.7,
                            random: true,
                            animation: { enable: true, speed: 0.3, minimumValue: 0.2 }, // Stelle che tremolano
                        },
                        size: { value: { min: 0.5, max: 4 }, random: true }, // Dimensione delle stelle (più grandi)
                        move: {
                            enable: true,
                            speed: 0.5, // Velocità lenta
                            direction: "none", // Movimento casuale
                            random: true,
                            straight: false,
                            outModes: { default: "out" }, // Escono dai bordi e ricompaiono
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                color: { value: ["#ffffff", "#ffd6ff", "#c8ffff"] },
                                frequency: 0.15, // Frequenza dello scintillio
                                opacity: 0.5,
                            },
                        },
                    },
                    detectRetina: true, // Migliora la resa su schermi retina
                }}
            />

            {/* Immagine */}
            <figure className="md:mr-6 flex justify-center md:justify-end relative z-10">
                <img
                    src={isDark ? "/img/giorgia-hero-dark.png" : "/img/giorgia-hero-light.png"}
                    alt="Foto personale"
                    className="w-64 md:w-[30rem] lg:w-[22rem] h-auto object-contain rounded-sm"
                />
            </figure>


            {/* Testo */}
            <div className="max-w-md relative z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
                <h2 className="mt-2 text-lg md:text-xl text-gray-900 dark:text-gray-200 font-medium">{subtitle}</h2>
                <p className="mt-2 text-base text-gray-900 dark:text-gray-200">{description}</p>
                <NavLink
                    to="/projects"
                    className="inline-block mt-4 bg-rose-400 dark:bg-rose-700 text-white px-8 py-2 font-semibold 
                    rounded-full shadow-md transition cursor-pointer" >
                    Vedi i miei progetti
                </NavLink>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-4">
                    {/* React */}
                    <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-900 dark:text-gray-200 text-xs font-semibold border border-gray-900 dark:border-gray-600">
                        <span>React</span>
                    </span>

                    {/* TypeScript (TS) */}
                    <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-900 dark:text-gray-200 text-xs font-semibold border border-gray-900 dark:border-gray-600">
                        <span>TS</span>
                    </span>

                    {/* JavaScript (JS) */}
                    <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-900 dark:text-gray-200 text-xs font-semibold border border-gray-900 dark:border-gray-600">
                        <span>JS</span>
                    </span>

                    {/* Storybook */}
                    <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-900 dark:text-gray-200 text-xs font-semibold border border-gray-900 dark:border-gray-600">
                        <span>Storybook</span>
                    </span>

                    {/* CSS*/}
                    <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-900 dark:text-gray-200 text-xs font-semibold border border-gray-900 dark:border-gray-600">
                        <span>CSS</span>
                    </span>

                    {/* LINK COMPLETO ALLA PAGINA ABOUT (Badge di Rinvio) */}
                    <NavLink
                        to="/about"
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-200 text-gray-900 dark:bg-rose-900 dark:text-gray-200 
                        text-xs font-semibold mb-5 md:mb-0"
                    >
                        <span>Stack Completo</span>
                        <span className="flex items-center">
                            <FaArrowRight className="text-sm" />
                        </span>
                    </NavLink>

                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;

{/* 
    Nel componente HeroSection, <Particles> crea un canvas per le particelle, cioè stelle animate. 
    Quando il componente si monta, chiama particlesInit.
    
    Engine: è il “motore” interno di tsparticles che gestisce tutto ciò che serve per creare, animare e disegnare 
    le particelle nel canvas, inclusi posizione, movimento, dimensione, colore e effetti come lo scintillio.
 
    loadSlim(engine): funzione che inizializza l’engine con la versione leggera del motore, caricando solo le funzionalità 
    di base senza plugin extra. Restituisce una Promise che indica quando l’engine è pronto.
    
    Le options nel componente stabiliscono l’aspetto e il comportamento delle particelle: numero, colori, forma, dimensione, 
    movimento casuale e scintillio. Il motore si occupa di animare tutto automaticamente, aggiornando posizione, opacità 
    e effetti senza bisogno di gestire manualmente il canvas.

   Così, <Particles> diventa un layer animato sopra la sezione, creando l’effetto di stelle scintillanti che si muovono delicatamente, 
   mentre testo, immagini e pulsanti rimangono perfettamente leggibili.   
*/}