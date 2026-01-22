import type { ReactNode } from "react";

// ==========================================================
// 1. Interfaccia per i blocchi narrativi 
// ==========================================================

export interface NarrativeBlockData {
    id: number;
    title: string;
    content: ReactNode;
    imageLight: string;
    imageDark: string;
    reverse: boolean;
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

// BLOCCHI NARRATIVI A ZIG-ZAG

const NarrativeBlocks: NarrativeBlockData[] = [

    {
        id: 1,
        title: "Il mio percorso dall'estetica al codice",
        content: (
            <>
                <p>
                    Il mio viaggio è iniziato lontano dal codice, in un mondo dove la precisione visiva è tutto: l'<span className="font-bold">estetica</span>.
                </p>
                <p>
                    Questa esperienza, unita alla formazione linguistica, mi ha dato sensibilità per <span className="font-bold">armonia e coerenza</span>.
                </p>
                <p>
                    Ho imparato che ogni dettaglio, anche il più piccolo, contribuisce al risultato finale.
                    La scintilla per la tecnologia è nata da autodidatta: quando ho capito che potevo unire <span className="font-bold">logica e creatività</span>.
                </p>
                <p>
                    Oggi, come Junior Front-End Developer con background Full Stack, porto questa meticolosità artigianale nel mondo digitale.
                </p>

            </>
        ),
        imageLight: "/images/about/about-giorgia-pc-light.png",
        imageDark: "/images/about/about-giorgia-pc-dark.png",
        reverse: true
    },

    {
        id: 2,
        title: "Codice e creatività: progettare esperienze digitali",
        content: (
            <>
                <p>
                    Per me il <span className="font-bold">codice</span> non è solo uno strumento tecnico, ma un mezzo attraverso cui dare forma a soluzioni significative, dove design e funzionalità si incontrano.
                </p>
                <p>
                    Amo lavorare su interfacce pulite, coerenti e <span className="font-bold">accessibili</span>, pensate per essere intuitive e piacevoli da usare.
                </p>
                <p>
                    Il mio obiettivo è trasformare concetti astratti in <span className="font-bold">esperienze digitali concrete</span>, dove estetica e tecnica convivono e si completano.
                </p>

            </>
        ),
        imageLight: "/images/about/about-pc.png",
        imageDark: "/images/about/about-pc.png",
        reverse: false
    },

    {
        id: 3,
        title: "Il ponte: dalle basi al Component Design",
        content: (
            <>
                <p className="mb-2">
                    La mia conversione professionale è stata formalizzata attraverso un percorso strutturato:
                </p>
                <ul className="list-disc list-inside marker:text-rose-400 mb-2">
                    <li>
                        <span className="font-bold">Corso Full Stack Web Development</span> (600h Boolean): un bootcamp intensivo che mi ha fornito conoscenze di Front-End e fondamenta di Back-End.
                    </li>
                    <li>
                        <span className="font-bold">Specializzazione in Web Design</span> (UX/UI): mi ha permesso di trattare i principi base di UX/UI e usare Storybook per creare componenti riutilizzabili.
                    </li>
                </ul>
                <p>
                    Questo percorso mi ha insegnato a unire tecnica e creatività, dando forma a <span className="font-bold">interfacce che raccontano una storia</span>.
                </p>
            </>
        ),
        imageLight: "/images/about/about-training.png",
        imageDark: "/images/about/about-training.png",
        reverse: true
    }
];

export default NarrativeBlocks;