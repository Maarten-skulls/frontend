import React from 'react';
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";
import AtomLink from "@/app/components/atoms/Link/AtomLink";
import AtomIcon from "@/app/components/atoms/Icon/AtomIcon";
import {ButtonVariant} from "@/app/components/commonEnums";


const AtomButton = ({data, className = ''}: { data: AtomButtonData, className?: string }) => {
    function Variant() {
        let className: string;

        switch (data.variant) {
            case ButtonVariant.Filled:
                className = "text-textColor bg-secondary";
                break;
            case ButtonVariant.Outlined:
                className = "text-textColor bg-onSurface border-2 border-secondary";
                break;
            default:
                className = "text-textColor bg-secondary";
        }

        return className;
    }

    const buttonClassName: string = `flex items-center justify-between gap-3 w-fit px-8 py-3 ${Variant()} rounded-md hover:scale-105 ${className}`;

    return (
        data.link ?
            <AtomLink data={data.link} onClick={data.onClickHandler} className={buttonClassName}>
                <>
                    {data.text && <span>{data.text}</span>}
                    {data.icon && <AtomIcon data={data.icon} />}
                </>
            </AtomLink>
            :
            <button onClick={data.onClickHandler} className={buttonClassName}>
                {data.text && <span>{data.text}</span>}
                {data.icon && <AtomIcon data={data.icon} />}
            </button>
    );
};

export default AtomButton;