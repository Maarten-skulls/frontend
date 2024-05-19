import React from "react";

export interface SectionProps {
    title?: string;
    description?: string;
    gridVariant: 'one-column' | 'two-column' | 'three-column';
    children?: React.ReactNode;
}