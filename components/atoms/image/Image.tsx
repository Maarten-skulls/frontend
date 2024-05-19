import React from 'react';
import {ImageProps} from "@/components/atoms/image/ImageProps";

const Image = (props: ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} className={props.className}/>
    );
};

export default Image;