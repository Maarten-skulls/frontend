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

    const renderTitle = () => {
        switch (props.titleType) {
            case 'h1':
                return <h1>{props.title}</h1>;
            case 'h2':
                return <h2>{props.title}</h2>;
            case 'h3':
                return <h3>{props.title}</h3>;
            case 'h4':
                return <h4>{props.title}</h4>;
            case 'h5':
                return <h5>{props.title}</h5>;
            case 'h6':
                return <h6>{props.title}</h6>;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderTitle()}
            <TextField children={props.description} className={`mt-6 ${widthClassName}`}/>
        </div>
    );
};

export default Article;