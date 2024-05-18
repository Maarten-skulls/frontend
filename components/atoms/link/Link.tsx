import React from 'react';
import {LinkProps} from "@/components/atoms/link/LinkProps";

const Link = (props: LinkProps) => {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
};

export default Link;