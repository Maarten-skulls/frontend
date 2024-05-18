import React from 'react';
import {ButtonProps} from "@/components/atoms/button/ButtonProps";

const Button = (props: ButtonProps) => {
    const variantClassNames: {[key: string]: string} = {
        filled: 'bg-primary textfield-bg',
        outlined: 'border border-slate-200 textfield-white'
    };

    return (
        <button className={`h-10 px-8 font-medium rounded-3xl ${variantClassNames[props.variant]} ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;