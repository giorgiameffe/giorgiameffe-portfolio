// IMPORTAZIONI
// Particles: componente React per mostrare le particelle animate
import Particles from "react-tsparticles";

// loadSlim: carica il "motore slim" delle particelle, cioè la versione leggera con le funzionalità base
// senza plugin extra. Necessario per far funzionare le particelle.
import { loadSlim } from "tsparticles-slim";

// Engine: tipo TypeScript che rappresenta il motore delle particelle
// Contiene tutto ciò che serve per gestire canvas, animazioni, forme, colori ecc.
import type { Engine } from "tsparticles-engine";

type HeroSectionProps = {
    title: string;
    subtitle: string;
    description: string;
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

    return (
        <section className="relative bg-gradient-to-br from-[#80d0ff] via-[#c8a8ff] to-[#ffb5a7] min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 text-center md:text-left overflow-hidden">

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
                            value: 0.5,
                            random: true,
                            animation: { enable: true, speed: 0.3, minimumValue: 0.2 }, // Stelle che tremolano
                        },
                        size: { value: { min: 2, max: 4 }, random: true }, // Dimensione delle stelle (più grandi)
                        move: {
                            enable: true,
                            speed: 0.15, // Velocità lenta
                            direction: "none", // Movimento casuale
                            random: true,
                            straight: false,
                            outModes: { default: "out" }, // Escono dai bordi e ricompaiono
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                color: { value: "#ffffff" },
                                frequency: 0.03, // Frequenza dello scintillio
                                opacity: 0.5,
                            },
                        },
                    },
                    detectRetina: true, // Migliora la resa su schermi retina
                }}
            />

            {/* Immagine */}
            <figure className="lg:mr-10 flex justify-center md:justify-end relative z-10">
                <img
                    src="/img/giorgia-img.png"
                    alt="Foto personale"
                    className="w-80 h-auto object-contain rounded-3"
                />
            </figure>

            {/* Testo */}
            <div className="max-w-md relative z-10">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="mt-3 text-xl">{subtitle}</h2>
                <p className="mt-2">{description}</p>
                <button className="mt-4 bg-rose-400 text-white px-6 py-2 rounded-3xl shadow-md transition cursor-pointer">
                    Scopri di più su di me
                </button>
            </div>
        </section>
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