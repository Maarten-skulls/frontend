import React from 'react';
import {AtomLinkData} from "@/app/components/atoms/Link/propTypes";
import Link from 'next/link';

const AtomLink = ({data, className = '', onClick, children} : {data: AtomLinkData, onClick?: () => void, className?: string, children: string | JSX.Element | JSX.Element[]}) => {
    return (
        data?.href &&
        <Link href={data.href} onClick={onClick} target={data.openInNewTab ? "_blank" : "_self"} className={className}>
            {children}
        </Link>
    );
};

export default AtomLink;