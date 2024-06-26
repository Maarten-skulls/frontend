import React from 'react';
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";

const AtomParagraph = ({data, className = ""}: {data: AtomParagraphData, className?: string}) => {
    return (
        <p className={className}>{data.text}</p>
    );
};

export default AtomParagraph;