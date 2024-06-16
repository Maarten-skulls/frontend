import loadable from '@loadable/component';
import { IconType } from 'react-icons';
import React from "react";

interface IIconComponent {
    icon: string;
    size?: number;
}
export type IReactIcon = string;

export const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
    const lib = icon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')[0].toLowerCase();
    const DynamicIconComponent = loadable(() => import(`react-icons/${lib}/index.js`), { resolveComponent: (el) => el[icon] }) as IconType;

    return <DynamicIconComponent size={size} />;
};