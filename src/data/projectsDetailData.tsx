// ==========================================================
// 1.Interfaccia per il dettaglio dei progetti
// ==========================================================

// Definisce la struttura di un singolo progetto per garantire la coerenza dei dati.

export interface ProjectsDetail {
    slug: string;
    title: string;
    briefDescription: string;

    // Dettagli contesto: ruolo, durata, team
    details: {
        role: string;
        duration: string;
        status: 'Completato' | 'In Corso' | 'In Manutenzione';
        team: string;
    };

    // Tecnologie utilizzate (per i badge)
    technologies: string[];
}