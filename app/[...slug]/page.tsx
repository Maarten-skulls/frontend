import {Metadata} from "next";
import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import {FALLBACK_SEO} from "@/app/utils/constants";
import TemplatePage from "@/app/components/template/Page/TemplatePage";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const page = await getPageBySlug(params.slug);

    if (!page.data[0]?.attributes.seo) {
        return FALLBACK_SEO;
    }

    const metadata = page.data[0]?.attributes.seo;

    return {
        title: metadata.title,
        description: metadata.description,
    }
}

export default async function PageRoute({params}: Props){
    const page = await getPageBySlug(params.slug);

    if (page.data.length == 0) {
        console.log("error")
        return null;
    }

    const sections = page.data[0].attributes.section;
    return <TemplatePage data={{sections}} />
}