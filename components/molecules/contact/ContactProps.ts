export interface ContactProps {
    title: string;
    phone: string;
    postalCode: string;
    address: string;
    email: string;
    buttonText: string;
    buttonStyle: "filled" | "outlined";
}