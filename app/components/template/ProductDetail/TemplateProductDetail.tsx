"use client";
import React, {useState} from 'react';
import {TemplateProductDetailData} from "@/app/components/template/ProductDetail/propTypes";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import {useShoppingCart} from "use-shopping-cart";
import MoleculeImageCarousel from "@/app/components/molecules/ImageCarousel/MoleculeImageCarousel";

const TemplateProductDetail = ({data}: {data: TemplateProductDetailData}) => {
    const { addItem, handleCartClick } = useShoppingCart();
    const [quantity, setQuantity] = useState(1);
    const { setItemQuantity } = useShoppingCart();

    const product = {
        name: data.title,
        description: data.description,
        currency: 'eur',
        price: data.price,
        image: data.image.data.attributes.url,
        price_id: data.price_id,
        quantity: quantity,
    };

    const handleAddToCart = () => {
        addItem(product);
        setItemQuantity(product.price_id, quantity);
        handleCartClick();
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(event.target.value));
    }

    return (
        <div className={"px-8 mt-10 container"}>
            <h1>{data.title}</h1>
            <div className={"mt-10 flex md:flex-row flex-col lg:gap-0 gap-10 w-full justify-between"}>
                <div className={"flex flex-col gap-10 md:w-3/6 w-full"}>
                    <MoleculeImageCarousel data={data.imageCarousel}/>
                </div>
                <div className={"flex md:flex-col flex-col-reverse gap-10 lg:w-2/6 md:w-3/6 w-full"}>
                    <p>{data.description}</p>
                    <div>
                        <p><span className={"font-medium"}>Gewicht: </span>{data.weight} kg</p>
                        <p><span className={"font-medium"}>Materiaal: </span>{data.material}</p>
                        <p><span className={"font-medium"}>Afmetingen: </span>{data.dimensions}</p>
                    </div>
                    <p className={"text-3xl font-medium"}>€ {data.price}</p>
                    <select value={quantity} className={"text-secondary bg-onSurface w-fit py-2 px-4 rounded-md border border-secondary"} onChange={handleQuantityChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <AtomButton data={{text: "Voeg toe aan winkelwagen!", onClickHandler: handleAddToCart, link: { href: '/winkelwagen', openInNewTab: false}}}/>
                </div>
            </div>
        </div>
    );
};

export default TemplateProductDetail;