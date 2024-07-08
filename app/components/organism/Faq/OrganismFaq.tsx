import React from 'react';
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import {OrganismFaqData} from "@/app/components/organism/Faq/propTypes";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import MoleculeFaqItem from "@/app/components/molecules/FaqItem/MoleculeFaqItem";

const OrganismFaq = ({data}: { data: OrganismFaqData}) => {
    return (
        <div className={"px-8 flex flex-col gap-8"}>
            <AtomTitle data={data.title}/>
            <AtomParagraph data={data.description}/>
            <div className={"w-1/2 mx-auto"}>
                {data.items && data.items.map((item, index) => (
                    <MoleculeFaqItem data={{...item}} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default OrganismFaq;