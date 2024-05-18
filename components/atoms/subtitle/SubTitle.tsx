import React from 'react';
import {SubTitleProps} from "@/components/atoms/subtitle/SubTitleProps";

const SubTitle = (props: SubTitleProps) => {
    return (
        <h2>{props.children}</h2>
    );
};

export default SubTitle;