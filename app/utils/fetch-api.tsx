import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
    path: string,
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        // Build request URL
        const requestUrl = `${getStrapiURL(`/api${path}`)}`;

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        return await response.json();

    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}