import {fetchAPI} from "@/app/[...slug]/utils/fetch-api";

export async function getPageBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/pages?filters[slug][$eq]=${slug}&populate[blocks][populate]=*&populate[seo]=*`;
    const options = {headers: {Authorization: `Bearer ${token}`}};
    return await fetchAPI(path, options);
}