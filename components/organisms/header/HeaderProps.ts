export interface HeaderProps {
    links: {
        id: number;
        slug: string;
        title: string
    }[];
    logo: {
        url: string;
        alternativeText: string;
    };
    buttons: {
        id: number;
        slug: string;
        title: string
        type: "filled" | "outlined";
    }[];
}