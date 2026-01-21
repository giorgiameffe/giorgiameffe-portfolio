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
        status: 'Completato' | 'In corso' | 'In Manutenzione';
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
        slug: "portfolio-personale",
        title: "Portfolio Personale",
        briefDescription: "Il sito che stai navigando: una piattaforma progettata e sviluppata da zero per raccontare il mio percorso, i miei progetti e la mia evoluzione tecnica attraverso un'esperienza utente curata e moderna.",
        heroImage: "/images/projects/portfolio-project/portfolio-hero.png",

        details: {
            role: "Frontend Developer",
            duration: "8 settimane (Ottobre 2025 - Dicembre 2025) con ritocchi successivi",
            status: "In corso",
            team: "Progetto individuale"
        },

        technologies: [
            "React",
            "Tailwind CSS",
            "Typescript",
            "Framer Motion",
            "Vercel"
        ],

        description: {
            scopeAndGoal: "Questo sito è un progetto in continua evoluzione, pensato per crescere insieme al mio percorso professionale. L'obiettivo era creare un sito fluido, bello da vedere e facile da usare, mettendo in pratica tutto quello che ho imparato sui principi di design e sulla programmazione per realizzare un prodotto reale e curato.",
            personalTechnicalChallenges: [
                "Scomposizione del layout in componenti modulari e riutilizzabili secondo la filosofia di React, garantendo un codice pulito, leggibile e facilmente manutenibile.",
                "Gestione avanzata dello stile tramite Tailwind CSS, curando minuziosamente la palette colori e le spaziature per riflettere un'identità visiva professionale e armoniosa.",
                "Implementazione della modalità Dark/Light dinamica con React Context API, permettendo all'utente di scegliere la preferenza visiva.",
                "Integrazione per la prima volta di Framer Motion per gestire animazioni d'ingresso e micro-interazioni che rendono l'interfaccia viva e moderna senza appesantire il caricamento.",
                "Configurazione della navigazione tramite React Router, gestendo rotte dinamiche.",
                "Gestione completa del form di contatto tramite l'integrazione con Formspree per la ricezione e il processing dei messaggi direttamente lato client.",
                "Esecuzione del primo deploy professionale su piattaforma Vercel."
            ],
            keyLearnings: "Questo progetto è stato il banco di prova fondamentale per bilanciare estetica e funzionalità. Mi ha permesso di affrontare per la prima volta l'intero ciclo di vita di un'app: dal design alla gestione delle rotte, fino alla messa in produzione su Vercel. Ho imparato che la qualità di un sito risiede nei dettagli invisibili, come l'accessibilità della Dark Mode e la fluidità delle animazioni, consolidando la mia capacità di consegnare un prodotto finito, funzionante e responsivo."
        },

        gallery: [
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-hero.png",
                type: "image",
                caption: "Hero Section"
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-hero-dark.png",
                type: "image",
                caption: "Dark Mode"
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-featured-projects.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-project-details.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-gallery-demo.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-about-me.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-about-skills.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-about-margot.png",
                type: "image",
                caption: ""
            },
            {
                mediaUrl: "/images/projects/portfolio-project/portfolio-contacts.png",
                type: "image",
                caption: ""
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/giorgiameffe-portfolio"
        }
    },

    {
        slug: "header-ui-custom",
        title: "Header UI Component - E-commerce di cosmesi naturale",
        briefDescription: "Componente Header personalizzato sviluppato in React e Storybook, pensato per un e-commerce di cosmetici naturali con focus su UX, accessibilità, design responsivo e componenti riutilizzabili secondo l'Atomic Design.",
        heroImage: "/images/projects/header-ui-project/header-desktop-light.png",

        details: {
            role: "Frontend Developer & Component Designer (Individuale)",
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
                "Assicurazione della compatibilità e accessibilità tramite l'uso di ARIA-labels e la gestione di focus-visible per una navigazione da tastiera ottimizzata.",
                "Applicazione dei principi di Gestalt (vicinanza e somiglianza) per organizzare gli elementi dell’header, migliorando la leggibilità della navigazione e la comprensione immediata delle gerarchie informative.",
            ],
            keyLearnings: "Questo progetto mi ha permesso di approfondire la progettazione UI secondo il modello Atomic Design, migliorando la gestione di responsività, accessibilità e interazione utente. Ho consolidato l’uso di Storybook come strumento di documentazione interattiva e rafforzato la creazione di componenti riutilizzabili e scalabili. Un aspetto centrale dell’apprendimento è stato il lavoro sull’identità visiva, con una palette ispirata alla cosmesi naturale: verde per richiamare natura ed ecosostenibilità e viola per evidenziare gli stati di interazione, spesso associato al settore della cosmesi. Questo mi ha aiutata a comprendere come colore, micro-interazioni e simboli visivi contribuiscano a costruire un’esperienza coerente e riconoscibile."
        },

        gallery: [
            {
                mediaUrl: "/images/projects/header-ui-project/header-desktop-light.png",
                type: "image",
                caption: "Header Desktop – Versione Light Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-tablet-light.png",
                type: "image",
                caption: "Header Tablet – Versione Light Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-large-mobile-light.png",
                type: "image",
                caption: "Header Large Mobile – Versione Light Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-small-mobile-light.png",
                type: "image",
                caption: "Header Small Mobile – Versione Light Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-desktop-dark.png",
                type: "image",
                caption: "Header Desktop – Versione Dark Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-tablet-dark.png",
                type: "image",
                caption: "Header Tablet – Versione Dark Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-large-mobile-dark.png",
                type: "image",
                caption: "Header Large Mobile – Versione Dark Mode",
            },
            {
                mediaUrl: "/images/projects/header-ui-project/header-small-mobile-dark.png",
                type: "image",
                caption: "Header Small Mobile – Versione Dark Mode",
            },

            {
                mediaUrl: "/images/projects/header-ui-project/header-video.mp4",
                type: "video",
                caption: "Demo dell'header: mostra la documentazione su Storybook, il passaggio dalla modalità light a dark e la transizione del menu mobile.",
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
                caption: "Sezione superiore della Homepage: logo, barra di navigazione e Hero Section con banner dinamico dedicato alle promozioni principali.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-ultimiarrivi.png",
                type: "image",
                caption: "Vetrina degli ultimi arrivi con card prodotto e indicazioni di eventuali sconti.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card.png",
                type: "image",
                caption: "Visualizzazione dei prodotti a griglia con prezzi e sconti.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-catalogo.png",
                type: "image",
                caption: "Catalogo prodotti con filtri di ricerca e ordinamento.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card-lista.png",
                type: "image",
                caption: "Visualizzazione dei prodotti in modalità elenco compatto.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-card-dettaglio.png",
                type: "image",
                caption: "Scheda prodotto con specifiche tecniche e tasto di acquisto.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-prodotti-correlati.png",
                type: "image",
                caption: "Sezione suggerimenti per prodotti simili o consigliati.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-wishlist.png",
                type: "image",
                caption: "Sezione Wishlist per visualizzare e aggiungere al carrello i prodotti salvati come preferiti.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-carrello.png",
                type: "image",
                caption: "Carrello laterale dinamico per la gestione rapida degli acquisti.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-checkout.png",
                type: "image",
                caption: "Riepilogo ordine e modulo per la finalizzazione del pagamento.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/boolshop-footer.png",
                type: "image",
                caption: "Piè di pagina con info aziendali, link utili e social.",
            },

            {
                mediaUrl: "/images/projects/boolshop-project/BoolShop-desktop-video.mp4",
                type: "video",
                caption: "Demo di BoolShop: panoramica dell'interfaccia fantasy, navigazione tra i prodotti e visualizzazione delle sezioni wishlist, carrello e checkout.",
            },
            {
                mediaUrl: "/images/projects/boolshop-project/BoolShop-responsività.mp4",
                type: "video",
                caption: "Demo di BoolShop: esplorazione dell'interfaccia utente su tablet e mobile, evidenziando l'adattabilità del design e la fruibilità del sito su tutti i dispositivi."
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
                caption: "Hero section della homepage con estetica vintage e invito all'azione centrale.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-list.png",
                type: "image",
                caption: "Catalogo dinamico dei film con schede descrittive, votazioni medie e barra di ricerca.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-detail.png",
                type: "image",
                caption: "Pagina di dettaglio del film con locandina, sinossi e sezione dedicata alle recensioni degli utenti.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-add-movie.png",
                type: "image",
                caption: "Interfaccia del modulo per l'aggiunta di nuovi film con gestione del caricamento immagini.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-review-form.png",
                type: "image",
                caption: "Modulo interattivo per l'inserimento di recensioni e votazioni in tempo reale.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-footer.png",
                type: "image",
                caption: "Piè di pagina con informazioni della community, link di navigazione e contatti social.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-desktop-video.mp4",
                type: "video",
                caption: "Demo di Cine Circle: tour dell'interfaccia vintage, navigazione tra i post e dimostrazione pratica dell'inserimento di nuovi film e recensioni.",
            },
            {
                mediaUrl: "/images/projects/cine-circle-project/cine-circle-responsività.mp4",
                type: "video",
                caption: "Demo di Cine Circle: esplorazione dell'interfaccia utente su tablet e mobile, evidenziando l'adattabilità del design su diversi dispositivi."
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/webapp-react",
            githubBackend: "https://github.com/giorgiameffe/webapp-express"
        }
    },

    {
        slug: "photo-blog-estate",
        title: "Photo Blog - Estate '24",
        briefDescription: "Applicazione web dinamica che simula una bacheca di sughero con foto polaroid. Il progetto utilizza Axios per il recupero dati asincrono e offre un'interfaccia interattiva con effetti hover realistici e gestione di overlay.",
        heroImage: "/images/projects/photo-blog-project/photo-blog-estate.png",

        details: {
            role: "Frontend Developer",
            duration: "3 giorni",
            status: "Completato",
            team: "Progetto individuale"
        },

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Axios"
        ],

        description: {
            scopeAndGoal: "L'obiettivo del progetto era creare una galleria fotografica interattiva ispirata a una bacheca fisica. La sfida principale consisteva nel popolare dinamicamente la pagina tramite una chiamata API esterna, garantendo al contempo un'esperienza utente coinvolgente attraverso animazioni CSS curate e un sistema di visualizzazione a schermo intero (overlay) per i singoli scatti.",
            personalTechnicalChallenges: [
                "Integrazione di Axios per gestire chiamate asincrone verso un'API REST, con gestione dei caricamenti e degli errori.",
                "Manipolazione dinamica del DOM per generare le card polaroid partendo dai dati ricevuti, mantenendo un codice pulito e modulare tramite funzioni dedicate.",
                "Creazione di un sistema di overlay custom in JavaScript puro per visualizzare le immagini ingrandite, gestendo l'apertura/chiusura e lo stato del display.",
                "Sviluppo di animazioni CSS avanzate: utilizzo di trasformazioni (rotate e scale) al passaggio del mouse per simulare il movimento delle foto sulla bacheca.",
                "Ottimizzazione del layout responsivo per diverse risoluzioni (Desktop, Tablet, Mobile) utilizzando calcoli dinamici (calc) e flexbox."
            ],
            keyLearnings: "Questo progetto ha consolidato la mia comprensione del ciclo di vita dei dati in un'applicazione frontend: dalla richiesta HTTP alla visualizzazione finale. Ho approfondito l'importanza dei dettagli nelle interazioni UI, imparando come piccole rotazioni casuali e ombreggiature possano trasformare una lista di immagini in un'esperienza visiva coerente. Inoltre, ho rafforzato la capacità di gestire elementi posizionati in modo assoluto e fisso (come i pin e l'overlay) all'interno di un layout fluido."
        },

        gallery: [
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-estate.png",
                type: "image",
                caption: "Vista principale della bacheca 'Estate 24' con il layout a griglia ispirato al sughero.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-card.png",
                type: "image",
                caption: "Griglia di card Polaroid con titolo, data e l'elemento grafico del pin.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-hover.png",
                type: "image",
                caption: "Effetto Hover: la foto si ingrandisce e ruota leggermente, simulando il distacco dalla bacheca.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-overlay.png",
                type: "image",
                caption: "Modalità Overlay: visualizzazione ingrandita dell'immagine con sfondo oscurato.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-tablet.png",
                type: "image",
                caption: "Design Responsivo – Tablet: adattamento del layout della bacheca per garantire una navigazione fluida e una disposizione armoniosa delle card su schermi medi.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-mobile.png",
                type: "image",
                caption: "Design Responsivo – Mobile: adattamento del layout della bacheca per garantire una navigazione fluida e una disposizione armoniosa delle card su schermi piccoli.",
            },
            {
                mediaUrl: "/images/projects/photo-blog-project/photo-blog-video.mp4",
                type: "video",
                caption: "Demo interattiva: navigazione tra le card Polaroid che mostra la fluidità delle animazioni all'interazione dell'utente.",
            }
        ],

        links: {
            github: "https://github.com/giorgiameffe/js-photo-blog"
        }
    }
]

export default ProjectsDetail;