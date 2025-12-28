// ==========================================================
// 1.Interfaccia per il dettaglio dei progetti
// ==========================================================

// Definisce la struttura di un singolo progetto per garantire la coerenza dei dati.

export interface ProjectsDetailData {
    slug: string;
    title: string;
    briefDescription: string;
    heroImage: string;

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
        githubBackend?: string;
    };
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const ProjectsDetail: ProjectsDetailData[] = [

    {
        slug: "header-ui-custom",
        title: "Header UI Component - E-commerce di cosmesi naturale",
        briefDescription: "Componente Header personalizzato sviluppato in React e Storybook, pensato per un e-commerce di cosmetici naturali con focus su UX, accessibilità, design responsivo e componenti riutilizzabili secondo l'Atomic Design.",
        heroImage: "/images/projects/header-ui-project/header-desktop-preview.png",

        details: {
            role: "Frontend Developer (Individuale)",
            duration: "2 settimane (Agosto 2025 - Settembre 2025) con ritocchi successivi",
            status: "Completato",
            team: "Progetto individuale"
        },

        technologies: [
            "React",
            "Typescript",
            "Storybook",
            "CSS3"
        ],

        description: {
            scopeAndGoal: "L'obiettivo del progetto è stato quello di creare un header personalizzato per un e-commerce di cosmetici naturali, sviluppato con React e documentato tramite Storybook, per garantire componenti riutilizzabili, scalabili e accessibili. L'header doveva rispecchiare l'identità visiva del brand, comunicando calma e naturalezza, e includere una navigazione ottimale sia su desktop che su dispositivi mobili.",
            personalTechnicalChallenges: [
                "Creazione di un sistema di navigazione reattivo che si adattasse facilmente a dispositivi di diverse dimensioni, passando da un menu orizzontale su desktop a un overlay verticale su mobile.",
                "Implementazione della gestione della modalità light/dark utilizzando variabili CSS e media queries, per migliorare l'accessibilità visiva su diverse condizioni di illuminazione.",
                "Sviluppo di componenti modulari seguendo il principio di Atomic Design, garantendo la riutilizzabilità e la manutenibilità del codice.",
                "Integrazione con Storybook per documentare i componenti e garantire un'esperienza interattiva nella modifica e test dei componenti.",
                "Assicurazione della compatibilità e accessibilità tramite l'uso di ARIA-labels e la gestione di focus-visible per una navigazione da tastiera ottimizzata."
            ],
            keyLearnings: "Questo progetto mi ha permesso di approfondire le tecniche di progettazione UI seguendo il modello Atomic Design, migliorando la gestione della responsività, dell'accessibilità e dell'interazione utente. Ho imparato a lavorare con Storybook per creare una documentazione interattiva e ho perfezionato la mia capacità di sviluppare componenti riutilizzabili e scalabili, concentrandomi su un design che fosse al tempo stesso funzionale ed esteticamente coerente."
        },

        gallery: [
            {
                mediaUrl: "URL dell'immagine",
                type: "image",
                caption: "Screenshot dell'header con design naturale e modalità light.",
            },
            {
                mediaUrl: "URL del video",
                type: "video",
                caption: "Demo dell'header: mostra il passaggio dalla modalità light a dark e la transizione del menu mobile.",
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/webdesign-custom-header-storybook"
        }
    },

    {
        slug: "bool-shop",
        title: "BoolShop - E-commerce di giochi da tavolo",
        briefDescription: "E-commerce full-stack a tema fantasy per la vendita di giochi da tavolo, sviluppato in team di 5 persone con un focus specifico sulla user experience e l'identità visiva.",
        heroImage: "/images/projects/boolshop-project/boolshop-preview.png",

        details: {
            role: "Frontend Developer & UI/UX Contributor",
            duration: "2 settimane (Maggio 2025 - Giugno 2025)",
            status: "Completato",
            team: "Progetto di gruppo finale di Boolean"
        },

        technologies: [
            "React",
            "Bootstrap",
            "CSS3",
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
                mediaUrl: "/images/projects/boolshop-project/boolshop-preview.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-ultimiarrivi.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-catalogo.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card-lista.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card-dettaglio.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-prodotti-correlati.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-wishlist.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-carrello.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-checkout.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-footer.png",
                type: "image",
                caption: "Homepage con design a tema fantasy.",
            },

            {
                mediaUrl: "/images/projects/boolshop-project/BoolShop-desktop-video.mp4",
                type: "video",
                caption: "Demo di BoolShop: panoramica dell'interfaccia fantasy, navigazione tra i prodotti e visualizzazione delle sezioni wishlist, carrello e checkout.",
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/bool-shop"
        }
    },

    {
        slug: "cine-circle",
        title: "Cine Circle - Blog di film",
        briefDescription: "Web app Full Stack con Frontend e Backend separati, sviluppata come blog cinematografico dinamico dallo stile vintage. Il progetto consente l’inserimento e la gestione in tempo reale di film e recensioni, offrendo un’esperienza fluida e moderna.",
        heroImage: "/images/projects/cine-circle-project/cine-circle-preview.png",

        details: {
            role: "Full Stack Developer (Individuale)",
            duration: "4 giorni (Maggio 2025)",
            status: "Completato",
            team: "Progetto individuale (Corso Boolean)"
        },

        technologies: [
            "React",
            "Express.js",
            "Node.js",
            "MySQL",
            "Bootstrap",
            "CSS3"
        ],

        description: {
            scopeAndGoal: "L'obiettivo del progetto era creare una piattaforma interattiva per appassionati di cinema, strutturando l'applicazione in due ecosistemi indipendenti per garantire una netta separazione delle responsabilità tra l'interfaccia utente e la logica del server.",
            personalTechnicalChallenges: [
                "Sviluppo dell'architettura Full Stack completa, integrando un frontend dinamico in React con un sistema backend strutturato in Express e Node.js.",
                "Gestione del database relazionale MySQL, implementando query e middleware per la manipolazione e il recupero efficiente dei dati relativi ai film.",
                "Gestione della comunicazione tra client e server tramite API RESTful, configurando le policy di CORS per garantire uno scambio dati sicuro ed efficiente.",
                "Implementazione di form interattivi per l'aggiunta di film e recensioni, gestendo i dati e l'invio al database MySQL tramite query.",
                "Logica di aggiornamento dinamico del frontend per visualizzare i nuovi contenuti (film/recensioni) immediatamente dopo l'invio al database.",
                "Creazione di un'interfaccia utente con estetica vintage, curando meticolosamente palette cromatica e tipografia per riflettere l'identità visiva del cinema classico.",
                "Ottimizzazione della responsività tramite Bootstrap e CSS personalizzato per mantenere la leggibilità e lo stile vintage su ogni risoluzione."
            ],

            keyLearnings: "Questo progetto mi ha permesso di approfondire lo sviluppo Full-Stack, dandomi l'opportunità di unire un frontend dinamico in React a un backend strutturato in Express e MySQL in un’unica esperienza coerente. La sfida principale, che ha rappresentato il mio più grande apprendimento, è stata bilanciare perfettamente la complessità tecnica delle operazioni lato server con una cura estetica meticolosa: ho imparato a costruire un prodotto dove la logica del codice e il design vintage convivono, garantendo un'interfaccia che non è solo funzionale e responsiva, ma capace di trasmettere un'identità visiva chiara e coinvolgente."
        },

        gallery: [
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-preview.png",
                type: "image",
                caption: "Homepage del blog con layout vintage.",
            },
            {
                mediaUrl: "URL del video",
                type: "video",
                caption: "Demo di Cine Circle: tour dell'interfaccia vintage, navigazione tra i post e dimostrazione pratica dell'inserimento di nuovi film e recensioni.",
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/webapp-react",
            githubBackend: "https://github.com/giorgiameffe/webapp-express"
        }
    }
]

export default ProjectsDetail;