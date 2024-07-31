import React from 'react';
import {MoleculeTextBlockData} from "@/app/components/molecules/TextBlock/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";

const MoleculeTextBlock = ({data}: { data: MoleculeTextBlockData }) => {
    return (
        <div>
            {data && data.map((block, index) => (
                <div>
                    <AtomTitle data={block.title}/>
                    <AtomParagraph data={block.paragraph}/>
                </div>
            ))}
        </div>
    );
};

export default MoleculeTextBlock;