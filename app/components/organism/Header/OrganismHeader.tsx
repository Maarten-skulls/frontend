"use client";
import React, {useState} from 'react';
import NavbarLogo from '../../../../public/logo.svg';
import {OrganismHeaderData} from "@/app/components/organism/Header/propTypes";
import AtomLink from "@/app/components/atoms/Link/AtomLink";
import AtomButton from "@/app/components/atoms/Button/AtomButton";
import {usePathname} from "next/navigation";
import {useShoppingCart} from "use-shopping-cart";
import {Size} from "@/app/components/commonEnums";
import Image from "next/image";
import {FaBars, FaTimes} from "react-icons/fa";

const OrganismHeader = ({data}: { data: OrganismHeaderData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();
    const { cartCount } = useShoppingCart();

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav className={"sticky top-0 bg-surface z-20 px-8 py-4 border-b border-onSurface"}>
            <ul className={"flex flex-row justify-between justify-items-center mx-auto items-center"}>
                <div className={"flex flex-row gap-16 items-center"}>
                    <li>
                        <AtomLink data={{href: "/", openInNewTab: false}}>
                            <Image src={NavbarLogo} alt={'Logo van FossilRelics'} width={50} height={50}/>
                        </AtomLink>
                    </li>
                    <div className={"hidden md:flex flex-row gap-6"}>
                        {data.links && data.links.link.map((link, index) => (
                            <li key={index}>
                                <AtomLink data={link.link} className={currentPath == link.link.href ? "text-secondary" : "text-gray-400"}>
                                    {link.text}
                                </AtomLink>
                            </li>
                        ))}
                    </div>
                </div>
                <div className={"flex flex-row gap-4"}>
                    {data.button.map((button, index) => (
                        <AtomButton data={{...button}} key={index}/>
                    ))}
                    <div>
                        <span
                            className={"absolute bg-onSurface px-2 border border-secondary rounded-full md:right-5 right-16 top-2 z-10"}>{cartCount}</span>
                        <AtomButton data={{
                            icon: {icon: 'MdShoppingCart', size: Size.Medium},
                            link: {href: '/winkelwagen', openInNewTab: false}
                        }}/>
                    </div>
                    <div onClick={() => openMenu()} className="cursor-pointer text-gray-500 my-auto md:hidden">
                        {isOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
                    </div>
                </div>
            </ul>
            {isOpen && (
                <div className="md:hidden flex flex-col py-1 border-onSurface border-t mt-4">
                    {data.links && data.links.link.map((link, index) => (
                        <li key={index} className={"px-4 mt-4 list-none"} onClick={closeMenu}>
                            <AtomLink data={link.link} className={currentPath == link.link.href ? "text-secondary" : "text-gray-400"}>
                                {link.text}
                            </AtomLink>
                        </li>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default OrganismHeader;