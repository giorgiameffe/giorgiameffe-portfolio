// ==========================================================
// 1. Interfaccia per i blocchi narrativi 
// ==========================================================

interface NarrativeBlockData {
    id: number;
    title: string;
    content: string;
    image: string;
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

// 1.BLOCCHI NARRATIVI A ZIG-ZAG

const NarrativeBlocks: NarrativeBlockData[] = [
    {
        id: 1,
        title: "Dalla Cura Estetica all'Attenzione Digitale",
        content: "Mi chiamo Giorgia Meffe e sono una Full Stack Web Developer... Il mio percorso è iniziato con un Diploma Linguistico seguito dalla qualifica nel settore estetico. L'esperienza maturata in questo campo è stata fondamentale: ho sviluppato una forte sensibilità per l'estetica, la cura visiva e l'attenzione al dettaglio, qualità che ora trasferisco direttamente nella progettazione di interfacce digitali. Parallelamente, la mia curiosità per il mondo tech mi ha spinto ad avvicinarmi allo sviluppo web da autodidatta, dando il via alla mia conversione professionale.",
        image: "Placeholder Immagine"
    },
    {
        id: 2,
        title: "Il Ponte: Dalle Basi Solide alla Specializzazione",
        content: "La decisione di rendere questa passione una professione mi ha portata a frequentare il bootcamp intensivo di 600 ore di Boolean, dove ho costruito le mie fondamenta. Successivamente, ho completato la Specializzazione in Web Design, approfondendo UX/UI e strumenti come Storybook. Questo percorso mi permette di unire eccellenza tecnica e design, creando un ponte tra codice e cura dell'esperienza utente.",
        image: "Placeholder Immagine"
    },
    {
        id: 3,
        title: "La Mia Missione: L'Estetica al Servizio della Funzionalità",
        content: "La mia visione è guidata dalla convinzione che la cura meticolosa per l'aspetto visivo debba essere sempre al servizio dell'utente. I miei progetti mirano a Pulizia e Coerenza, Intuitività e Implementazione Efficace. Sono motivata a crescere nel Front-End Development e nella progettazione UX/UI, cercando attivamente di accumulare esperienza pratica per costruire soluzioni digitali che siano belle da vedere e facili da usare.",
        image: "Placeholder Immagine"
    },
];

export default NarrativeBlocks;