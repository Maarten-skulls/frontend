import React from 'react';
import {OrganismFooterData} from "@/app/components/organism/Footer/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import AtomLink from "@/app/components/atoms/Link/AtomLink";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const OrganismFooter = ({data}: { data: OrganismFooterData }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={"px-8 container mt-20 flex flex-col w-full"}>
            <div className={"flex w-full justify-between py-4 border-y border-onSurface"}>
                <div className={"flex flex-col gap-4"}>
                    <AtomTitle data={data.title}/>
                    <AtomParagraph data={data.quote} className={"italic"}/>
                    <div className={"flex flex-row gap-4"}>
                        {data.socials && data.socials.map((social, index) => (
                            <AtomButton data={{...social}} key={index}/>
                        ))}
                    </div>
                </div>
                <div className={"flex flex-row gap-16"}>
                    {data.links.map((linkList, index) => (
                        <div key={index}>
                            <AtomTitle data={linkList.title}/>
                            <ul className={"mt-2 flex flex-col gap-3"}>
                                {linkList.link.map((link, index) => (
                                    <li key={index}>
                                        <AtomLink data={link.link}>{link.text}</AtomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"flex flex-row justify-between py-4"}>
                <div>© {currentYear} <span className={"text-secondary"}>FossilRelics.</span> Alle rechten gereserveerd</div>
                <div>Powered by <a className={"text-secondary"} target={"_blank"} href={"https://www.linkedin.com/in/jasper-samson-699a8a261/"}>Jasper Samson</a></div>
            </div>
        </footer>
    );
};

export default OrganismFooter;