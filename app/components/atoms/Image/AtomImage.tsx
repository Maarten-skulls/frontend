import React from 'react';
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import Image from "next/image";

const AtomImage = ({data, className, isPriority=false}: { data: AtomImageData, className?: string, isPriority?: boolean}) => {
    return (
        <Image
            src={data.url}
            alt={data.alternativeText}
            height={data.height}
            width={data.width}
            className={className}
            priority={isPriority}
        />
    );
};

export default AtomImage;