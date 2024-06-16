import React from "react";

export interface ButtonProps {
    variant: "filled" | "outlined";
    onClick?: Function;
    children: React.ReactNode;
    className?: string;
    disabled: boolean;
    key?: number;
}