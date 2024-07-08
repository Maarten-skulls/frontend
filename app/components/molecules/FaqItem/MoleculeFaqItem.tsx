"use client";
import React, {useEffect, useRef, useState} from 'react';
import {MoleculeFaqItemData} from "@/app/components/molecules/FaqItem/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomIcon from "@/app/components/atoms/Icon/AtomIcon";
import {Size} from "@/app/components/commonEnums";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";

const MoleculeFaqItem = ({data}: { data: MoleculeFaqItemData }) => {
    const [active, setActive] = React.useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = active
                ? `${contentRef.current.scrollHeight}px`
                : "0px";
        }
    }, [active]);

    const toggleAccordion = () => {
        setActive(!active);
    }

    return (
        <div className="mb-4">
            <div className="flex flex-row justify-between bg-onSurface p-4 rounded-t-md" onClick={toggleAccordion}>
                <AtomTitle data={data.question} />
                <AtomIcon data={{ icon: active ? "FaMinus" : "FaPlus", size: Size.Medium }} className="text-secondary" />
            </div>
            <div className="rounded-b-md border-2 border-onSurface transition-max-height duration-300 overflow-hidden" ref={contentRef}>
                <AtomParagraph data={data.answer} className={"p-4"}/>
            </div>
        </div>
    );
};

export default MoleculeFaqItem;