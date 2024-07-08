import {fetchAPI} from "@/app/utils/fetch-api";

export async function getProductBySlug(slug: string){
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/products?filters[slug][$eq]=${slug}&populate=deep`;
    const options = {headers: {Authorization: `Bearer ${token}`}};
    return await fetchAPI(path, options);
}