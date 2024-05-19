import React from 'react';
import {IconTitleProps} from "@/components/atoms/iconTitle/IconTitleProps";

const IconTitle = (props: IconTitleProps) => {
    return (
        <div className={`flex flex-row gap-2 ${props.className}`}>
            <div>{props.icon}</div>
            <p>{props.title}</p>
        </div>
    );
};

export default IconTitle;