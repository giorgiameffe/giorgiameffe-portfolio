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
            <p className="mb-1">
                Ogni giorno condivido il mio spazio con <span className="text-rose-400 dark:text-rose-700 font-bold">Margot</span>, la mia piccola assistente.
                Sempre pronta a guardare con occhi curiosi ciò che creo, spesso mi ricorda che anche la tastiera può diventare un comodo posticino per un pisolino.
            </p>

            {/* Scheda Tecnica Creativa */}
            <div className="p-3 mb-1 border border-rose-400 rounded-xl text-left">
                <div className="mb-3">
                    <div className="flex gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs uppercase font-mono text-gray-700 dark:text-gray-400">Stato: Operativa</span>
                    </div>
                </div>

                <ul className="font-mono text-xs space-y-2 text-gray-700 dark:text-gray-400">
                    <li>
                        <span className="font-bold">Ruolo:</span> Senior Debugger & Giudice Silenzioso
                    </li>
                    <li>
                        <span className="font-bold">Skill:</span> Collaudo tastiere (solo se calde), Campionessa di pisolini
                    </li>
                    <li>
                        <span className="font-bold">Task:</span> Ti fissa con fare giudicante finché non risolvi il bug
                    </li>
                    <li>
                        <span className="font-bold">Disponibilità:</span> Solo se c'è la pappa 🍲
                    </li>
                </ul>
            </div>

            <p className="leading-7 lg:leading-7.5">
                Tra un progetto e l’altro ci concediamo pause rigeneranti: giochi da tavolo, serie TV, libri o un po' di svago all'aria aperta.
                Silenziosa ma presente, Margot rende le giornate più piacevoli, aggiungendo allegria al lavoro quotidiano.
            </p>
        </>
    ),
    imageLight: "/images/about/about-giorgia-margot-light.png",
    imageDark: "/images/about/about-giorgia-margot-dark.png",
}

export default PersonalBlock;