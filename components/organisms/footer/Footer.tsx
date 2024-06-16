import React from 'react';
import {FooterProps} from "@/components/organisms/footer/FooterProps";
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTikTok} from "react-icons/ai";
import {FaArtstation} from "react-icons/fa";
import Link from "@/components/atoms/link/Link";
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import Contact from "@/components/molecules/contact/Contact";

const Footer = (props: FooterProps) => {
    return (
        <footer className='mt-32 mb-10 px-20'>
            <div className="mb-10 flex justify-between">
                <div className="flex flex-row gap-28">
                    <SubTitle children='FossilRelics'/>
                    {props.linkList.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <div className="mt-8 flex flex-col gap-4">
                                {item.links.map(link => (
                                    <Link key={link.id} children={link.title} href={link.slug}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {props.contact.map(item => (
                        <Contact
                            key={item.id}
                            title={item.title} phone={item.phone} postalCode={item.postalcode} address={item.address} email={item.email}
                            buttonStyle={item.button.style} buttonText={item.button.title}
                        />
                    ))}
                </div>
            </div>
            <hr className='divide-dashed'/>
            <div className='mt-10 flex flex-row gap-6 justify-center'>
                <AiOutlineInstagram size={30}/>
                <AiOutlineLinkedin size={30}/>
                <AiOutlineTikTok size={30}/>
                <FaArtstation size={30}/>
            </div>
            <div className="flex flex-row gap-8 mt-14 justify-center">
                {
                    props.links.map(item => (
                        <Link key={item.id} children={item.title} href={item.slug}/>
                    ))
                }
            </div>
            <div className="mt-10 flex justify-between">
                <p className="text-[12px]">© Copyright FossilRelics - {new Date().getFullYear()}</p>
                <p className="text-[12px]">Powered By Jasper Samson</p>
            </div>
        </footer>
    );
};

export default Footer;