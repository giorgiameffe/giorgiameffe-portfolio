// Interfaccia per i progetti, da implementare per la card del dettaglio

interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    link: string;
    featured?: boolean;
}

const projects: Project[] = [

    {
        slug: "Progetto uno",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        link: "Link del progetto",
        featured: true
    },
    {
        slug: "Progetto due",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        link: "Link del progetto",
        featured: true
    },
    {
        slug: "Progetto tre",
        title: "Titolo del progetto",
        description: "Descrizione del progetto",
        image: "Immagine del progetto",
        link: "Link del progetto",
        featured: true
    }
]

export default projects;