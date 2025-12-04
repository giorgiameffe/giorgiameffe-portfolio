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
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "TypeScript"],
            color: "bg-blue-200 text-blue-950 dark:bg-blue-950/50 dark:text-blue-200"
        },
        {
            title: "Back-End",
            skills: ["Node.js", "Express.js", "MySQL", "REST API"],
            color: "bg-green-200 text-green-950 dark:bg-green-950/50 dark:text-green-200"
        },
        {
            title: "UI & Component Design",
            skills: ["UX/UI base", "Atomic Design", "Storybook", "Accessibilità (WCAG/ARIA)", "Componenti riutilizzabili"]
        },
        {
            title: "Tools",
            skills: ["Git / GitHub", "VS Code", "Postman"]
        }
    ],
    softSkills: [
        {
            title: "Organizzazione & Gestione",
            skills: ["Gestione del tempo", "Precisione e attenzione al dettaglio", "Pianificazione autonoma", "Problem solving"]
        },
        {
            title: "Comunicazione",
            skills: ["Ascolto attivo", "Empatia e collaborazione", "Orientamento al cliente", "Adattabilità"]
        },
        {
            title: "Approccio al lavoro",
            skills: ["Curiosità e voglia di imparare", "Responsabilità", "Creatività", "Resilienza"]
        }
    ]
};

export default skillsData;