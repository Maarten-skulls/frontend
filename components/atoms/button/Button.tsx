import React from 'react';
import {ButtonProps} from "@/components/atoms/button/ButtonProps";
import {FaArrowRight} from "react-icons/fa";

const Button = (props: ButtonProps) => {
    const variantClassNames: {[key: string]: string} = {
        filled: 'bg-primary text-bg',
        outlined: 'border border-slate-200 textfield-white'
    };

    return (
        <button className={`h-10 px-8 font-medium rounded-3xl flex gap-4 items-center ${variantClassNames[props.variant]} ${props.className}`}>
            {props.children} <FaArrowRight/>
        </button>
    );
};

export default Button;