import React from 'react';
import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";

const AtomTitle = ({data, className = ''}: {data: AtomTitleData, className?: string; }) => {
    const HeaderTag = `${data.level}` as React.ElementType;
    return (
        <HeaderTag className={`w-full ${className}`}>
            {data.text}
        </HeaderTag>
    );
};

export default AtomTitle;