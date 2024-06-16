export interface FooterProps {
    linkList: {
        id: number;
        title: string;
        links: {
            title: string;
            slug: string;
            id: number;
        }[]
    }[]
    links: {
        id: number;
        slug: string;
        title: string;
    }[];
    contact: {
        id: number;
        title: string;
        phone: string;
        postalcode: string;
        email: string;
        address: string;
        button: {
            id: number;
            title: string;
            slug: string;
            style: "filled" | "outlined";
        }
    }[]
}