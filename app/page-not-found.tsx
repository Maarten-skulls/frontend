import React from 'react';
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import logo from "../public/logo.svg"
import Image from "next/image";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import {ButtonVariant} from "@/app/components/commonEnums";

const PageNotFound = () => {
    return (
        <div className={"flex flex-col m-auto"}>
            <div className={"flex flex-col gap-6"}>
                <Image src={logo} alt={'logo van FossilRelics'} width={75} height={75} className={"mx-auto"}/>
                <AtomTitle data={{text: 'Deze pagina bestaat niet...', level: 'h1'}} className={"text-center"}/>
                <AtomButton data={{text: 'Keer terug naar de homepagina!', variant: ButtonVariant.Filled, link: { href: '/', openInNewTab: false}}} className={"mx-auto"}/>
            </div>
        </div>
    );
};

export default PageNotFound;