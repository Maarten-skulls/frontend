import React from 'react';
import {OrganismHeroData} from "@/app/components/organism/Hero/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import AtomImage from "@/app/components/atoms/Image/AtomImage";

const OrganismHero = ({data}: { data: OrganismHeroData }) => {
    return (
        <div className={"relative h-lvh"}>
            <AtomImage data={data.image}/>
            <div>
                <AtomTitle data={data.title} level={1}/>
                <AtomParagraph data={data.description}/>
                <div className={"flex flex-row gap-5"}>
                    {data.button?.map((button, index) => (
                        <AtomButton data={{...button}} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganismHero;