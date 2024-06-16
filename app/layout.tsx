import "./globals.css";
import {fetchAPI} from "@/app/[...slug]/utils/fetch-api";
import {getPageBySlug} from "@/app/[...slug]/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/[...slug]/utils/constants";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";

async function getNavigation() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/main-menu?populate=*`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    return await fetchAPI(path, options);
}

async function getFooter() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/footer?populate[socials]=*&populate[links]=*&populate[LinkList][populate]=*`;
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
    // Navigation Menu
    const menu = await getNavigation();
    const navigationData = menu.data.attributes;

    const links = navigationData.MainMenuItems.filter((item: { __component: string; }) => item.__component === 'menu.menu-link');
    const buttons = navigationData.MainMenuItems.filter((item: { __component: string; }) => item.__component === 'menu.menu-button');


    // Footer Menu
    const footer = await getFooter();
    const footerData = footer.data.attributes;

    const linkList = footerData.LinkList.filter((item: { __component: string; }) => item.__component === 'menu.menu-link-list');
    const contact = footerData.LinkList.filter((item: { __component: string; }) => item.__component === 'blocks.contact');

    return (
        <html>
            <body>
            <Header
                logo={navigationData.MenuLogo.data.attributes}
                links={links}
                buttons={buttons}
            />
            <main>
                {children}
            </main>
            <Footer
                linkList={linkList}
                links={footerData.links}
                contact={contact}
            />
            </body>
        </html>
    );
}