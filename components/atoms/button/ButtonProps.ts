import React from "react";

export type ButtonVariant = "filled" | "outlined";
export interface ButtonProps {
    variant: ButtonVariant,
    onClick?: Function,
    children: React.ReactNode,
    className?: string,
    disabled: boolean,
}