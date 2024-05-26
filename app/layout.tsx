import "./globals.css";
import {fetchAPI} from "@/app/[...slug]/utils/fetch-api";
import {getPageBySlug} from "@/app/[...slug]/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/[...slug]/utils/constants";
import Header from "@/components/organisms/header/Header";

async function getNavigation() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/main-menu?populate=*`;
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
    };
}

export default async function RootLayout({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    const menu = await getNavigation();
    const headerData = menu.data.attributes;
    console.log(headerData.MainMenuItems);

    const links = headerData.MainMenuItems.filter((item: { __component: string; }) => item.__component === 'menu.menu-link');
    const buttons = headerData.MainMenuItems.filter((item: { __component: string; }) => item.__component === 'menu.menu-button');

    return (
        <html>
            <body>
            <Header
                logo={headerData.MenuLogo.data.attributes}
                links={links}
                buttons={buttons}
            />
            <main>
                {children}
            </main>
            </body>
        </html>
    );
}