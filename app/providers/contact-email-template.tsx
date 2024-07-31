import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface props {
    name: string;
    email: string;
    message: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const ContactEmail = ({name, email, message}: props) => (
    <Html>
        <Head />
        <Preview>
            recreating history of the creatures animals.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>Hi FossilRelics,</Text>
                <Text style={paragraph}>
                    {message}
                    <br />
                    {email}
                </Text>
                <Text style={paragraph}>
                    Met vriendelijke groeten,
                    <br />
                    {name}
                </Text>
                <Hr style={hr} />
            </Container>
        </Body>
    </Html>
);
export default ContactEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center" as const,
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
