import React from 'react';
import {AtomIconData} from "@/app/components/atoms/Icon/propTypes";
import * as MaterialDesign from "react-icons/md";
import * as FontAwesome from "react-icons/fa";
import {Size} from "@/app/components/commonEnums";

const AtomIcon = ({data, className = ""}: {data: AtomIconData, className?: string}) => {

    const DynamicIcon = (MaterialDesign as any)[data.icon] || (FontAwesome as any)[data.icon];

    function fontSize(): number {
        let sizeInPx: number;

        // based on tailwind font size
        switch (data.size) {
            case Size.Small:
                sizeInPx = 16;
                break;
            case Size.Medium:
                sizeInPx = 24;
                break;
            case Size.Large:
                sizeInPx = 32;
                break;
            case Size.XL:
                sizeInPx = 40;
                break;
            default:
                sizeInPx = 16;
        }

        return sizeInPx;
    }

    return (
        <DynamicIcon size={fontSize()} className={className}/>
    );
};

export default AtomIcon;