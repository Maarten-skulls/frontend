"use client";
import React, {useEffect, useState} from 'react';
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

const Page = () => {
    const { clearCart } = useShoppingCart();
    const [cartCleared, setCardCleared] = useState(false);

    useEffect(() => {
        if (!cartCleared) {
            clearCart();
            setCardCleared(true);
        }
    }, [cartCleared, clearCart]);

    return (
        <div className={"px-8 flex flex-col m-auto text-center gap-6"}>
            <Image src={logo} alt={'logo van FossilRelics'} width={75} height={75} className={"mx-auto"}/>
            <AtomTitle data={{text: 'Bedankt voor je aankoop!', level: 'h1'}}/>
            <AtomParagraph data={{text: 'We zullen je bestelling zo snel mogelijk gereed maken en verzenden. Daarnaast hebben we je een bevestigingsmail verstuurd. Mocht je deze niet ontvangen hebben laat dit ons dan weten!'}}/>
        </div>
    );
};

export default Page;
