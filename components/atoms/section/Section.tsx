import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import TextField from "@/components/atoms/textfield/TextField";
import {SectionProps} from "@/components/atoms/section/SectionProps";

const Section = (props: SectionProps) => {
    const gridClassNames: {[key: string]: string} = {
        'one-column': 'grid grid-cols-1',
        'two-column': 'grid grid-cols-2',
        'three-column': 'grid grid-cols-3',
    };

    const gridClassName = gridClassNames[props.gridVariant] || gridClassNames['one-column'];

    return (
        <div className={props.className}>
            <div className={`mt-8 ${gridClassName}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Section;