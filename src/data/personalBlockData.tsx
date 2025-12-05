import type { ReactNode } from "react";

// ==========================================================
// 1. Interfaccia per il blocco narrativo personale
// ==========================================================

export interface PersonalBlockData {
    title: string;
    content: ReactNode;
    imageLight: string;
    imageDark: string;
}
