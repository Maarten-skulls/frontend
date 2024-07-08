import React from 'react';
import {OrganismProductListData} from "@/app/components/organism/ProductList/propTypes";
import MoleculeProductCard from "@/app/components/molecules/ProductCard/MoleculeProductCard";

const OrganismProductList = ({data}: { data: OrganismProductListData}) => {
    return (
        <div className={"px-8 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 justify-items-center"}>
            {data.products && data.products.data.map((product, index) => (
                <MoleculeProductCard data={{...product}} key={index}/>
            ))}
        </div>
    );
};

export default OrganismProductList;