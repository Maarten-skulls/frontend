import React from "react";

export interface SectionProps {
    gridVariant: 'one-column' | 'two-column' | 'three-column';
    className?: string;
    children?: React.ReactNode;
}