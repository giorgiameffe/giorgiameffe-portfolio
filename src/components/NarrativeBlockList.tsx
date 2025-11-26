import React from "react";
import NarrativeBlock from "./NarrativeBlock";
import NarrativeBlocks from "../data/aboutContent";
import type { NarrativeBlockData } from "../data/aboutContent";

const NarrativeBlockList: React.FC = () => {

    return (

        <>
            {NarrativeBlocks.map((block: NarrativeBlockData) => (
                <NarrativeBlock
                    key={block.id}
                    {...block} />
            ))}
        </>
    )

}

export default NarrativeBlockList;