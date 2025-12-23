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
                    Il mio viaggio è iniziato lontano dal codice, in un mondo dove la precisione visiva e l’attenzione al dettaglio sono fondamentali: l’estetica.
                    Questa esperienza, unita alla formazione linguistica, mi ha donato una sensibilità unica per armonia, coerenza e percezione visiva complessiva.
                </p>
                <p>
                    Ho scoperto che ogni dettaglio, per quanto piccolo, contribuisce al risultato finale.
                    La scintilla per la tecnologia è nata da autodidatta, quando ho capito che potevo unire logica e creatività.
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
                <p>Per me il codice non è solo uno strumento tecnico, ma un mezzo attraverso cui dare forma a soluzioni significative, dove design e funzionalità si incontrano.</p>
                <p>
                    Amo lavorare su interfacce pulite, coerenti e accessibili, pensate per essere intuitive e piacevoli da usare.
                </p>
                <p>
                    Il mio obiettivo è trasformare concetti astratti in esperienze digitali concrete, dove estetica e tecnica convivono e si completano.
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
                La conversione professionale è stata formalizzata attraverso un percorso strutturato e mirato:
                <ul>
                    <li>
                        <span className="font-bold">Corso Full Stack Web Development </span>(600h Boolean): un bootcamp intensivo che ha
                        gettato le basi del mio skill set, fornendo conoscenze di Front-End e le fondamenta di Back-End.
                    </li>

                    <li>
                        <span className="font-bold">Specializzazione in Web Design </span>(UX/UI): questa specializzazione mi ha permesso di trattare principi base di UX/UI e utilizzare
                        Storybook per la creazione di componenti riutilizzabili
                    </li>
                </ul>

                <p>
                    Un percorso che mi ha insegnato a unire tecnica e creatività, dando forma a interfacce che raccontano una storia.
                </p>

            </>
        ),
        imageLight: "/images/about/about-training.png",
        imageDark: "/images/about/about-training.png",
        reverse: true
    }
];

export default NarrativeBlocks;