import React from 'react';
import { OrganismHeroData } from "@/app/components/organism/Hero/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import AtomImage from "@/app/components/atoms/Image/AtomImage";

const OrganismHero = ({ data }: { data: OrganismHeroData }) => {
    return (
        <div className="w-full h-screen overflow-hidden">
            <AtomImage data={data.background} className="absolute inset-0 object-cover w-full h-full"/>
            <div className="absolute inset-0 bg-blackColor bg-opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <AtomTitle data={data.title}/>
                <AtomParagraph data={data.description}/>
                <div className="flex flex-row justify-center gap-5 mt-5">
                    {data.button?.map((button, index) => (
                        <AtomButton data={{...button}} key={index}/>
                    ))}
                </div>
            </div>
            <div className="icon-scroll absolute bottom-0"></div>
        </div>
    );
};

export default OrganismHero;
