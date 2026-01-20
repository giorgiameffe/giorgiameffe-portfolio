// ==========================================================
// 1.Interfaccia per i progetti
// ==========================================================

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    featured: boolean;
    categories?: {
        name: "UI Design System" | "Front-end" | "Back-end";
        color: string;
    }[];
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const projects: Project[] = [

    {
        slug: "portfolio-personale",
        title: "Portfolio Personale",
        description: "Progetto individuale volto alla creazione di una vetrina digitale per esporre il mio percorso e i miei progetti.",
        image: "/images/projects/portfolio-project/portfolio-hero.png",
        featured: true,
        categories: [
            {
                name: "Front-end",
                color: "bg-indigo-200 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-200"
            }
        ]
    },
    {
        slug: "header-ui-custom",
        title: "Header UI custom",
        description: "Progetto individuale sulla creazione di un componente Header UI custom per un sito di cosmetici naturali.",
        image: "/images/projects/header-ui-project/header-preview.png",
        featured: true,
        categories: [
            {
                name: "UI Design System",
                color: "bg-purple-200 text-purple-800 dark:bg-purple-950 dark:text-purple-200"
            }
        ]
    },
    {
        slug: "bool-shop",
        title: "BoolShop",
        description: "Progetto Full Stack di gruppo sulla creazione di un e-commerce di giochi da tavolo.",
        image: "/images/projects/boolshop-project/boolshop-preview.png",
        featured: true,
        categories: [
            {
                name: "Front-end",
                color: "bg-indigo-200 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-200"
            },
            {
                name: "Back-end",
                color: "bg-green-200 text-green-950 dark:bg-green-950 dark:text-green-200"
            }
        ]
    },
    {
        slug: "cine-circle",
        title: "Cine Circle",
        description: "Progetto Full Stack individuale sulla creazione e gestione di un blog di film.",
        image: "/images/projects/cine-circle-project/cine-circle-preview.png",
        featured: true,
        categories: [
            {
                name: "Front-end",
                color: "bg-indigo-200 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-200"
            },
            {
                name: "Back-end",
                color: "bg-green-200 text-green-950 dark:bg-green-950 dark:text-green-200"
            }
        ]
    },

    {
        slug: "photo-blog-estate",
        title: "Photo Blog - Estate '24",
        description: "Applicazione web che simula una bacheca di sughero con foto polaroid.",
        image: "/images/projects/photo-blog-project/photo-blog-estate.png",
        featured: false,
        categories: [
            {
                name: "Front-end",
                color: "bg-indigo-200 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-200"
            }
        ]
    },
]

export default projects;