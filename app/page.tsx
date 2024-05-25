import {blocksRenderer} from "@/app/[...slug]/utils/blocks-renderer";
import {getPageBySlug} from "@/app/[...slug]/utils/get-page-by-slug";


export default async function RootRoute() {
    try {
        const page = await getPageBySlug('homepage')
        if (page.error && page.error.status == 401)
            throw new Error(
                'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
            )

        if (page.data.length === 0) return null
        const contentSections = page.data[0].attributes.blocks;
        return contentSections.map((section: any, index: number) =>
            blocksRenderer(section, index)
        )
    } catch (error: any) {
        window.alert('Missing or invalid credentials')
    }
}