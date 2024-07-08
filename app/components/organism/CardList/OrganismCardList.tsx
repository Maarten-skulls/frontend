import React from 'react';
import {OrganismCardListData} from "@/app/components/organism/CardList/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import MoleculeCard from "@/app/components/molecules/Card/MoleculeCard";

const OrganismCardList = ({data}: { data: OrganismCardListData }) => {
    return (
        <div className={"px-8"}>
            <div className={"flex flex-col gap-8"}>
                {data.title && <AtomTitle data={data.title}/>}
                {data.description && <AtomParagraph data={data.description}/>}
                <div className={"flex md:flex-row justify-evenly gap-6 text-center flex-col"}>
                    {data.card.map((card, index) => (
                        <MoleculeCard data={{...card}} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganismCardList;