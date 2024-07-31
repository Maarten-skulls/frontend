"use client";
import React from 'react';
import { useShoppingCart } from "use-shopping-cart";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import {FaTrash} from "react-icons/fa6";
import Image from "next/image";
import {loadStripe} from "@stripe/stripe-js";

const Page = () => {
    const {
        cartCount,
        cartDetails,
        removeItem,
        totalPrice,
        clearCart
    } = useShoppingCart();

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);
    const items = Object.values(cartDetails ?? {}).map((entry) => ({
        priceId: entry.price_id,
        quantity: entry.quantity
    }));

        const handleCheckout = async () => {
            const stripe = await stripePromise;
            const response = await fetch('/api/checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lineItems: items.map((product) => {
                        return {
                            price: product.priceId,
                            quantity: product.quantity
                        }
                    })
                })
            });
            const session = await response.json();
            await stripe?.redirectToCheckout({ sessionId: session.id });
        }

    return (
        <div className={"flex flex-col xl:w-1/3 lg:w-1/2 w-full lg:mx-auto px-10"}>
            <div className={"mt-10"}>
                <ul className={"flex flex-col gap-5"}>
                    {cartCount === 0 ? (
                        <h1 className={"py-6"}>Je winkelwagen is nog leeg...</h1>
                    ) : (
                        <>
                            {Object.values(cartDetails ?? {}).map((entry: any) => (
                                <li key={entry.id} className={"flex flex-row justify-between items-center"}>
                                    <div className={"flex flex-row gap-8"}>
                                        <Image src={entry.image} alt={entry.image} width={150} height={150} className={"rounded-md"}/>
                                        <div className={"flex flex-col gap-2"}>
                                            <h3>{entry.name}</h3>
                                            <div className={"flex sm:flex-row flex-col gap-4"}>
                                                <p className={"text-md"}>€ {entry.price}</p>
                                                <p>Aantal: {entry.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={"text-secondary"} onClick={() => {
                                        removeItem(entry.id)
                                    }}><FaTrash/></button>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>
            <div className={"mt-10 pt-2 border-t-2 border-onSurface"}>
                <div className={"flex justify-between"}>
                    <p className={"font-medium"}>Totaal:</p>
                    <p>€ {totalPrice?.toFixed(2)}</p>
                </div>
                <p className={"mt-0.5 font-light"}>Verzending en BTW wordt tijdens de betaling gerekend</p>
                <div className={"mt-6"}>
                    <AtomButton
                        data={{onClickHandler: handleCheckout, text: "Betaal nu!"}}
                        className={"w-full bg-black text-white"}>
                    </AtomButton>
                </div>
            </div>
        </div>
    );
};

export default Page;