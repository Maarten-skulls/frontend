import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import TextField from "@/components/atoms/textfield/TextField";
import {ArticleProps} from "@/components/molecules/article/ArticleProps";

const Article = (props: ArticleProps) => {
    const widthClassNames: {[key: string]: string} = {
        'full-width': 'w-full',
        'half-width': 'w-1/2',
    };

    const widthClassName = widthClassNames[props.widthVariant];

    return (
        <div>
            <SubTitle children={props.title}/>
            <TextField children={props.description} className={`mt-6 ${widthClassName}`}/>
        </div>
    );
};

export default Article;