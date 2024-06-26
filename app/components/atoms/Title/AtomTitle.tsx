import React from 'react';
import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";

const AtomTitle = ({data, level, className = ''}: {data: AtomTitleData, level: number, className?: string; }) => {
    const HeaderTag = `h${level}` as React.ElementType;
    return (
        <HeaderTag className={`w-full ${className}`}>
            {data.text}
        </HeaderTag>
    );
};

export default AtomTitle;