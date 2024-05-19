import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import TextField from "@/components/atoms/textfield/TextField";
import {SectionProps} from "@/components/organisms/section/SectionProps";

const Section = (props: SectionProps) => {
    const variantClassNames: {[key: string]: string} = {
        'one-column': 'grid grid-cols-1',
        'two-column': 'grid grid-cols-2',
        'three-column': 'grid grid-cols-3',
    };

    const gridClassName = variantClassNames[props.gridVariant] || variantClassNames['one-column'];

    return (
        <div className='px-20 py-10'>
            <div>
                <SubTitle children={props.title}/>
                <TextField children={props.description} className='w-1/2 mt-6'/>
            </div>
            <div className={`mt-8 ${gridClassName}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Section;