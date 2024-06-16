import {IconType} from "react-icons";
import React from "react";

export interface SectionProps {
    title: string;
    description: string;
    image: string;
    buttons: {
        title: string;
        slug: string;
        style: 'filled' | 'outlined';
        id?: number;
    }[]
    cards: {
        title: string;
        description: string;
        icon: React.ReactNode;
        id?: number;
    }[]
}