import "./globals.css";
import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/utils/constants";
import React from "react";
import {fetchAPI} from "@/app/utils/fetch-api";
import OrganismHeader from "@/app/components/organism/Header/OrganismHeader";
import OrganismFooter from "@/app/components/organism/Footer/OrganismFooter";
import CartProvider from "@/app/providers/cartProvider";

async function getGlobal() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/global?populate=deep`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    return await fetchAPI(path, options);
}

export async function generateMetadata() {
    const meta = await getPageBySlug('homepage');
    if (!meta.data) return FALLBACK_SEO;

    const metadata = meta.data[0].attributes.seo;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        icons: {
            icon: "/logo.svg",
        },
    };
}

export default async function RootLayout({children}: {children: React.ReactNode;}) {
    const global = await getGlobal();
    const headerData = global.data.attributes.header;
    const footerData = global.data.attributes.footer;

    return (
        <html>
            <body>
                <CartProvider>
                    <OrganismHeader data={headerData}/>
                    {children}
                    <OrganismFooter data={footerData}/>
                </CartProvider>
            </body>
        </html>
    );
}