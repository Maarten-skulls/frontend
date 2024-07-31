import React from 'react';
import {MoleculeCardData} from "@/app/components/molecules/Card/propTypes";
import {CardVariant} from "@/app/components/commonEnums";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomIcon from "@/app/components/atoms/Icon/AtomIcon";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";

function MoleculeCard({data, className}: { data: MoleculeCardData, className?: string}) {
    function getCardByVariant(): JSX.Element {
        let element: JSX.Element;
        switch (data.variant) {
            case CardVariant.InformationCard:
                element =
                    <div className={"flex flex-col gap-4 h-max text-center p-5 bg-onSurface rounded-lg border-2 border-secondary"}>
                        {data.title && <AtomTitle data={data.title}/>}
                        {data.icon &&
                            <div className={"mx-auto bg-secondary p-2 rounded-full"}>
                                <AtomIcon data={data.icon}/>
                            </div>
                        }
                        {data.description && <AtomParagraph data={data.description}/>}
                    </div>
                break;
            case CardVariant.CounterCard:
                element =
                    <div className={"flex flex-col justify-between gap-6 h-max"}>
                        {data.title && <AtomTitle data={data.title}/>}
                        <div className={"w-20 h-20 rounded-full border-2 border-secondary inline-flex items-center justify-center mx-auto bg-onSurface"}>
                            {data.description && <AtomParagraph data={data.description} className={"text-4xl"}/>}
                        </div>
                    </div>
                break;
            default:
                element = <div>Card is not supported</div>
        }
        return element;
    }


    return (
        <div className={"w-full drop-shadow-md" + className}>
            <div>{getCardByVariant()}</div>
        </div>
    );
}

export default MoleculeCard;