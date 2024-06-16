import {IconBaseProps, IconType} from "react-icons";
import React from "react";

export interface InfoCardProps {
    title: string;
    icon: React.ReactNode;
    text: string;
    classname?: string;
}