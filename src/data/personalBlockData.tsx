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
                Ogni giorno condivido il mio spazio con <span className="font-bold">Margot</span>, la mia piccola assistente
                e supervisore ufficiale dei progetti.
                Sempre pronta a guardare con occhi curiosi ciò che creo, dalle interfacce ai <span className="font-bold">piccoli schizzi creativi</span>, spesso
                mi ricorda che anche la tastiera può diventare un comodo posticino per un pisolino.
            </p>
            <p>
                Tra un progetto e l'altro, ci concediamo pause rigeneranti: qualche partita ai <span className="font-bold">giochi da tavolo</span>, una <span className="font-bold">serie TV</span> da guardare insieme, momenti di <span className="font-bold">lettura</span>
                e un po' di svago all’<span className="font-bold">aria aperta</span>.
                <br></br>
                Margot, silenziosa ma presente, rende le giornate più piacevoli e aggiunge un tocco di compagnia e allegria
                al lavoro quotidiano.
            </p>
        </>
    ),
    imageLight: "/images/about/about-giorgia-margot-light.png",
    imageDark: "/images/about/about-giorgia-margot-dark.png",
}

export default PersonalBlock;