import React from 'react';
import {TextFieldProps} from "@/components/atoms/textfield/TextFieldProps";

const TextField = (props: TextFieldProps) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    );
};

export default TextField;