import React from 'react';
import {MoleculeProductCardData} from "@/app/components/molecules/ProductCard/propTypes";
import AtomImage from "@/app/components/atoms/Image/AtomImage";
import AtomLink from "@/app/components/atoms/Link/AtomLink";

const MoleculeProductCard = ({data}: { data: MoleculeProductCardData}) => {
    return (
        <AtomLink data={{href: "producten/" + data.attributes.slug, openInNewTab: false}}>
            <div className={"flex flex-col xl:w-80 lg:w-72 w-80"}>
                <AtomImage data={data.attributes.image} className={"w-max rounded-t-md"}/>
                <div className={"flex flex-col gap-4 p-2 bg-onSurface rounded-b-md"}>
                    <h5 className={"text-secondary"}>{data.attributes.title}</h5>
                    <p className={"truncate"}>{data.attributes.description}</p>
                    <div>
                        <p className={"text-xl font-medium"}>€ {data.attributes.price}</p>
                    </div>
                </div>
            </div>
        </AtomLink>
    );
};

export default MoleculeProductCard;