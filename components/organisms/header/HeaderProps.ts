export interface MenuItem {
    id: number;
    __component: 'menu.menu-link' | 'menu.menu-button';
    title: string;
    slug: string;
    type: 'filled' | 'outlined';
}