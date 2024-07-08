import React from 'react';
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import Image from "next/image";

const AtomImage = ({data, className, isPriority=false}: { data: AtomImageData, className?: string, isPriority?: boolean}) => {
    return (
        <Image
            src={data.data?.attributes?.url}
            alt={data.data?.attributes?.alternativeText}
            height={data.data?.attributes?.height}
            width={data.data?.attributes?.width}
            className={className}
            priority={isPriority}
        />
    );
};

export default AtomImage;