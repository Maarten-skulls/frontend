import React from 'react';
import {OrganismPageHeaderData} from "@/app/components/organism/PageHeader/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomImage from "@/app/components/atoms/Image/AtomImage";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const OrganismPageHeader = ({data}: { data: OrganismPageHeaderData }) => {
    return (
        <div className={"relative h-fit"}>
            <AtomImage data={data.background} className={"absolute inset-0 object-cover w-full h-full"}/>
            <div className={"relative bg-blackColor bg-opacity-80"}>
                <div className={"h-fit"}>
                    <div className={"p-8 text-center"}>
                        <AtomTitle data={data.title}/>
                        <AtomParagraph data={data.description} className={"mt-5"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganismPageHeader;