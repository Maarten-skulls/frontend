import React from "react";

export interface HeroProps {
    className?: string;
    title: string;
    description?: string;
    background: string;
    scrollAnimation?: boolean;
}