import {FALLBACK_SEO} from "@/app/utils/constants";
import {Metadata} from "next";
import {getProductBySlug} from "@/app/utils/get-product-by-slug";
import TemplateProductDetail from "@/app/components/template/ProductDetail/TemplateProductDetail";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const product = await getProductBySlug(params.slug);

    if (!product.data[0]?.attributes.seo) {
        return FALLBACK_SEO;
    }

    const metadata = product.data[0]?.attributes.seo;

    return {
        title: metadata.title,
        description: metadata.description,
    }
}

export default async function PageRoute({params}: Props){
    const product = await getProductBySlug(params.slug);

    if (product.data.length == 0) {
        console.log("error")
        return null;
    }

    const data = product.data[0].attributes;
    return <TemplateProductDetail data={data}/>
}