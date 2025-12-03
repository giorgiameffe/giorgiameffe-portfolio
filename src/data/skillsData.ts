// ==========================================================
// 1. Interfacce per la sezione skills
// ==========================================================

export interface SkillsGroup {
    title: string;
    skills: string[];
}

export interface SkillsSectionData {
    hardSkills: SkillsGroup[];
    softSkills: SkillsGroup[];
}