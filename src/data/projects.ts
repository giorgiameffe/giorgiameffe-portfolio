// Interfaccia per i progetti, da implementare per la card del dettaglio

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    featured?: boolean;
}

const projects: Project[] = [

    {
        slug: "bool-shop",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        featured: true
    },
    {
        slug: "cine-circle",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        featured: true
    },
    {
        slug: "header-ui-custom",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        featured: true
    }
]

export default projects;