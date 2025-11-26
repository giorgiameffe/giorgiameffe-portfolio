// ==========================================================
// 1. Interfaccia per i blocchi narrativi 
// ==========================================================

import type { ReactNode } from "react";

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

// 1.BLOCCHI NARRATIVI A ZIG-ZAG

const NarrativeBlocks: NarrativeBlockData[] = [

    {
        id: 1,
        title: "Dalla Cura Estetica all'Attenzione Digitale",
        content: (
            <>
                Il mio percorso è iniziato lontano dal codice, in un settore dove la perfezione visiva
                e l'attenzione al dettaglio sono fondamentali: l'estetica.
                <br />
                Questa esperienza, unita alla formazione linguistica, mi ha dotato di una sensibilità
                unica per l'armonia, la coerenza e l'esperienza visiva complessiva.
                Ho imparato che ogni dettaglio, per quanto piccolo, contribuisce al risultato finale.
                <br />
                La scintilla per il mondo tech è arrivata da autodidatta, quando ho capito che potevo
                fondere il mio lato logico con la creatività. Oggi, come Junior Front-End developer
                con background Full Stack, porto questa meticolosità artigianale nel mondo digitale.
            </>
        ),
        imageLight: "/img/giorgia-about-pc-light.png",
        imageDark: "/img/giorgia-about-pc-dark.png",
        reverse: true
    },

    {
        id: 2,
        title: "La Mia Missione: L'Estetica al Servizio della Funzionalità",
        content: (
            <>
                Vedo il codice non solo come una serie di istruzioni, ma come lo strumento per dare
                vita a esperienze utente di valore. Il mio approccio al design e allo sviluppo si basa
                su questi tre pilastri:
                <ul>
                    <li>
                        Design Intuitivo (UX/UI): Tradurre bisogni complessi in interfacce pulite,
                        accessibili e facili da usare.
                    </li>

                    <li>
                        Coerenza Visiva: Applicare rigorosamente i principi di design (Gestalt,
                        Atomic Design) per garantire un look &amp; feel professionale in ogni
                        componente.
                    </li>

                    <li>
                        Qualità del codice: garantire componenti puliti, leggibili e ottimizzati,
                        mantenendo un front-end fluido e curato, soprattutto in React.
                    </li>
                </ul>

                <p>
                    Il mio obiettivo è chiudere il divario tra il concetto artistico e
                    l'implementazione tecnica, realizzando prodotti digitali che non solo funzionino
                    bene, ma che siano un piacere da usare.
                </p>
            </>
        ),
        imageLight: "/img/giorgia-about-pc-light.png",
        imageDark: "",
        reverse: false
    },

    {
        id: 3,
        title: "Il Ponte: Dalle Basi Solide alla Specializzazione Component Design",
        content: (
            <>
                La conversione professionale è stata formalizzata attraverso un percorso di studio
                intensivo e mirato:
                <ul>
                    <li>
                        Corso Full Stack Web Development (600h Boolean): Un bootcamp intensivo che ha
                        gettato le basi del mio skill set, fornendo conoscenze di Front-End
                        (...) e le fondamenta di Back-End (...).
                    </li>

                    <li>
                        Specializzazione in Web Design (UX/UI): Questa specializzazione ha affinato il
                        mio focus, permettendomi di trattare principi base di UX/UI, accessibilità e
                        la creazione di librerie di componenti riutilizzabili con Storybook.
                    </li>
                </ul>

                <p>
                    Questa combinazione di competenze mi permette di trasformare un’idea in
                    un’interfaccia solida, accessibile e rifinita in ogni dettaglio.
                </p>
            </>
        ),
        imageLight: "/img/giorgia-about-pc-light.png",
        imageDark: "",
        reverse: true
    }
];

export default NarrativeBlocks;