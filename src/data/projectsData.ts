// ==========================================================
// 1.Interfaccia per i progetti
// ==========================================================

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    featured?: boolean;
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const projects: Project[] = [

    {
        slug: "header-ui-custom",
        title: "Header UI custom",
        description: "Progetto individuale sulla creazione di un componente Header UI custom per un sito di cosmetici naturali.",
        image: "/img/header-preview.png",
        featured: true
    },
    {
        slug: "bool-shop",
        title: "BoolShop",
        description: "Progetto Full Stack di gruppo sulla creazione di un e-commerce di giochi da tavolo",
        image: "/img/boolshop-preview.png",
        featured: true
    },
    {
        slug: "cine-circle",
        title: "Cine Circle",
        description: "Progetto Full Stack individuale sulla creazione e gestione di un blog di film.",
        image: "/img/cine-circle-preview.png",
        featured: true
    },
]

export default projects;