import React from 'react';
import {TitleProps} from "@/components/atoms/title/TitleProps";

const Title = (props: TitleProps) => {
    return (
        <h1>{props.children}</h1>
    );
};

export default Title;