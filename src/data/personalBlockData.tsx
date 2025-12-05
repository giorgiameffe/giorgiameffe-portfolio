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

// ==========================================================
// 2. Dati Centralizzati
// ==========================================================

const PersonalBlock: PersonalBlockData = {

    title: "La mia assistente felina: Margot",
    content: (
        <>
            <p>
                Ogni giorno condivido il mio spazio con <span className="font-bold">Margot</span> 🐱, la mia piccola assistente
                e supervisore ufficiale dei progetti.
                Sempre pronta a guardare con occhi curiosi ciò che creo, dalle interfacce ai piccoli schizzi creativi, spesso
                mi ricorda che anche la tastiera può diventare un comodo posticino per un pisolino.
            </p>
            <p>
                Tra un progetto e l'altro, ci concediamo pause rigeneranti: qualche partita ai giochi da tavolo, una serie TV
                da guardare insieme, schizzi e colori per progetti creativi, qualche momento di svago all’aria aperta.
                <br></br>
                Margot, silenziosa ma presente, rende le giornate più piacevoli e aggiunge un tocco di compagnia e allegria
                al lavoro quotidiano.
            </p>
        </>
    ),
    imageLight: "/img/about-giorgia-margot-light.png",
    imageDark: "/img/about-giorgia-margot-dark.png",
}

export default PersonalBlock;