// ==========================================================
// 1. Interfacce per la sezione skills
// ==========================================================

export interface SkillsGroup {
    title: string;
    skills: string[];
    color?: string;
}

export interface SkillsSectionData {
    hardSkills: SkillsGroup[];
    softSkills: SkillsGroup[];
}

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const skillsData: SkillsSectionData = {
    hardSkills: [
        {
            title: "Front-End",
            skills: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Bootstrap"],
            color: "bg-indigo-200 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-200"
        },
        {
            title: "Back-End",
            skills: ["Node.js", "Express.js", "MySQL", "REST API"],
            color: "bg-green-200 text-green-950 dark:bg-green-950 dark:text-green-200"
        },
        {
            title: "UI & Component Design",
            skills: ["UX/UI base", "Atomic Design", "Storybook", "Accessibilità (WCAG/ARIA)", "Componenti riutilizzabili"],
            color: "bg-purple-200 text-purple-800 dark:bg-purple-950 dark:text-purple-200"
        },
        {
            title: "Tools",
            skills: ["Git / GitHub", "NPM", "Vite", "VS Code", "Postman"],
            color: "bg-pink-200 text-pink-950 dark:bg-pink-950 dark:text-pink-200"
        }
    ],
    softSkills: [
        {
            title: "Organizzazione & Gestione",
            skills: ["Gestione del tempo", "Precisione e attenzione al dettaglio", "Pianificazione autonoma", "Problem solving"],
            color: "bg-orange-200 text-orange-950 dark:bg-orange-950 dark:text-orange-200"
        },
        {
            title: "Comunicazione",
            skills: ["Ascolto attivo", "Empatia e collaborazione", "Orientamento al cliente", "Adattabilità"],
            color: "bg-orange-200 text-orange-950 dark:bg-orange-950 dark:text-orange-200"
        },
        {
            title: "Approccio al lavoro",
            skills: ["Curiosità e voglia di imparare", "Responsabilità", "Creatività", "Resilienza"],
            color: "bg-orange-200 text-orange-950 dark:bg-orange-950 dark:text-orange-200"
        }
    ]
};

export default skillsData;