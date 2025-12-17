// ==========================================================
// 1.Interfaccia per il dettaglio dei progetti
// ==========================================================

// Definisce la struttura di un singolo progetto per garantire la coerenza dei dati.

export interface ProjectsDetailData {
    slug: string;
    title: string;
    briefDescription: string;

    // Dettagli contesto: ruolo, durata, team
    details: {
        role: string;
        duration: string;
        status: 'Completato' | 'In Corso' | 'In Manutenzione';
        team: string;
    };

    // Tecnologie utilizzate (per i badge)
    technologies: string[];

    // Descrizione approfondita
    description: {
        scopeAndGoal: string; // Lo scopo e l'obiettivo del progetto
        personalTechnicalChallenges: string[]; // Le sfide tecniche personali superate
        keyLearnings: string; // Risultati o lezioni apprese
    };

    // Elementi multimediali per la galleria
    gallery: {
        mediaUrl: string;
        type: 'image' | 'video';
        caption: string;
    }[];

    // Link esterni
    links: {
        github: string;
    };
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const ProjectsDetail: ProjectsDetailData[] = [
    {
        slug: "bool-shop",
        title: "BoolShop - E-commerce di Giochi da Tavolo",
        briefDescription: "E-commerce full-stack a tema fantasy per la vendita di giochi da tavolo, sviluppato in team di 5 persone con un focus specifico sulla user experience e l'identità visiva.",

        details: {
            role: "Frontend Developer & UI/UX Contributor",
            duration: "2 settimane (Maggio 2025 - Giugno 2025)",
            status: "Completato",
            team: "Team di 5 persone (Progetto di gruppo finale di Boolean)"
        },

        technologies: [
            "React",
            "React Router",
            "Bootstrap",
            "CSS",
            "Express.js",
            "Node.js",
            "MySQL"
        ],

        description: {
            scopeAndGoal: "L'obiettivo principale del progetto di gruppo era la realizzazione di una piattaforma e-commerce completa con architettura Full-Stack, con particolare enfasi sulla creazione di un'identità visiva coesa a tema fantasy e sulla creazione di un'interfaccia utente (UI) fluida e responsiva.",
            personalTechnicalChallenges: [
                "Progettazione e implementazione della responsività completa del layout tramite Bootstrap e CSS puro, ottimizzando l'esperienza d'acquisto su ogni dispositivo.",
                "Sviluppo di un sistema di navigazione fluido con React Router per gestire il passaggio tra catalogo, carrello e le fasi del checkout.",
                "Creazione di componenti React riutilizzabili per le card prodotto e gli elementi dell'interfaccia, garantendo coerenza visiva e manutenibilità.",
                "Implementazione dell'interfaccia dinamica per la gestione del carrello e della spedizione gratuita, curando i feedback visivi in tempo reale per l'utente.",
                "Definizione dell'identità visiva fantasy (palette, tipografia e grafica) applicata uniformemente a tutte le sezioni, inclusi i moduli di pagamento e riepilogo ordine."
            ],

            keyLearnings: "Questo progetto ha permesso di consolidare le mie competenze in UI design e sviluppo frontend, in particolare nell'approfondimento delle logiche di navigazione, nella creazione di layout responsivi e nell'importanza della coerenza visiva per migliorare la fluidità e la qualità dell’interazione dell’utente."
        },

        gallery: [
            {
                mediaUrl: "URL del video/immagine della homepage",
                type: "image",
                caption: "Screenshot della homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "URL del video/immagine della pagina prodotto",
                type: "video",
                caption: "Demo della responsività e dell'interazione con le card prodotto.",
            },
        ],

        links: {
            github: "https://github.com/giorgiameffe/bool-shop"
        }
    }
]

export default ProjectsDetail;