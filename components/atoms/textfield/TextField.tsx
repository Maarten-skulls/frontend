import React from 'react';
import {TextFieldProps} from "@/components/atoms/textfield/TextFieldProps";

const TextField = (props: TextFieldProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default TextField;