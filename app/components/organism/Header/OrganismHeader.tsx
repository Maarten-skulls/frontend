import React from 'react';
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import {OrganismHeaderData} from "@/app/components/organism/Header/propTypes";
import AtomLink from "@/app/components/atoms/Link/AtomLink";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const OrganismHeader = ({data}: { data: OrganismHeaderData }) => {
    return (
        <nav className={"sticky top-0 bg-surface z-20 px-8 py-4 border-b border-onSurface"}>
            <ul className={"flex flex-row justify-between justify-items-center container mx-auto items-center"}>
                <div className={"flex flex-row gap-16"}>
                    <li>
                        <AtomLink data={{href: "/", openInNewTab: false}}>
                            <AtomTitle data={data.title}/>
                        </AtomLink>
                    </li>
                    <div className={"flex flex-row gap-6"}>
                        {data.links && data.links.link.map((link, index) => (
                            <li>
                                <AtomLink data={link.link} key={index}>
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
                </div>
            </ul>
        </nav>
    );
};

export default OrganismHeader;