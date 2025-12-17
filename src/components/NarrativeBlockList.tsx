import React from "react";
import NarrativeBlock from "./NarrativeBlock";
import NarrativeBlocks from "../data/narrativeBlockData";
import type { NarrativeBlockData } from "../data/narrativeBlockData";

const NarrativeBlockList: React.FC = () => {

    return (

        <div className="flex flex-col items-center mx-auto max-w-6xl gap-10">
            {NarrativeBlocks.map((block: NarrativeBlockData) => (
                <NarrativeBlock
                    key={block.id}
                    {...block} />
            ))}
        </div>
    )

}

export default NarrativeBlockList;