import React from 'react';
import {TemplateProductDetailData} from "@/app/components/template/ProductDetail/propTypes";
import AtomImage from "@/app/components/atoms/Image/AtomImage";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const TemplateProductDetail = ({data}: {data: TemplateProductDetailData}) => {
    return (
        <div className={"px-8 mt-10 container"}>
            <h1>{data.title}</h1>
            <div className={"mt-10 flex flex-row w-full justify-between"}>
                <div className={"flex flex-col gap-10 w-3/6"}>
                    <AtomImage data={data.image} className={"w-full rounded-md"}/>
                </div>
                <div className={"flex flex-col gap-10 w-2/6"}>
                    <p>{data.description}</p>
                    <div>
                        <p><span className={"font-medium"}>Gewicht: </span>{data.weight} kg</p>
                        <p><span className={"font-medium"}>Materiaal: </span>{data.material}</p>
                        <p><span className={"font-medium"}>Afmetingen: </span>{data.dimensions}</p>
                    </div>
                    <p className={"text-3xl font-medium"}>€ {data.price}</p>
                    <AtomButton data={{text: "Voeg toe aan winkelwagen!"}}/>
                </div>
            </div>
        </div>
    );
};

export default TemplateProductDetail;