import React from 'react';
import {CardProps} from "@/components/atoms/card/CardProps";

const Card = (props: CardProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default Card;