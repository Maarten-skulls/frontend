import React from 'react';
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import Image from "next/image";

const AtomImage = ({data, className, isPriority=false}: { data: AtomImageData, className?: string, isPriority?: boolean}) => {
    const attributes = 'data' in data ? data.data.attributes : data.attributes;
    return (
        <Image
            src={attributes.url}
            alt={attributes.alternativeText}
            height={attributes.height}
            width={attributes.width}
            className={className}
            priority={isPriority}
        />
    );
};

export default AtomImage;