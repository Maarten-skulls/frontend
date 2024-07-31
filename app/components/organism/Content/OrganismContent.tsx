import React from 'react';
import {OrganismContentData} from "@/app/components/organism/Content/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import AtomImage from "@/app/components/atoms/Image/AtomImage";
import {ContentDirection} from "@/app/components/commonEnums";

const OrganismContent = ({data}: { data: OrganismContentData}) => {
    function Direction() {
        let direction: string;

        switch (data.direction) {
            case ContentDirection.Column:
                direction = "flex-col";
                break;
            case ContentDirection.Row:
                direction = "flex-row";
                break;
            case ContentDirection.Reversed_row:
                direction = "flex-row-reverse";
                break;
            default:
                direction = "flex-row"
        }
        return direction;
    }
    return (
        <div className={`px-8 flex md:${Direction()} flex-col items-center gap-20`}>
            <div className={"flex flex-col md:w-3/5 w-full gap-8"}>
                <AtomTitle data={data.title}/>
                <AtomParagraph data={data.description}/>
                <div className={"flex md:flex-row flex-col w-fit gap-4"}>
                    {data.button && data.button.map((button, index) => (
                        <AtomButton data={{...button}} key={index} className={"md:w-fit w-full"}/>
                    ))}
                </div>
            </div>
            <div className={"md:w-2/5 w-full"}>
                {data.image && <AtomImage data={data.image} className={"rounded-lg"}/>}
            </div>
        </div>
    );
};

export default OrganismContent;