import React from "react";

export interface HeroProps {
    className?: string;
    title: string;
    text?: string;
    background: string;
    scrollAnimation?: boolean;
}