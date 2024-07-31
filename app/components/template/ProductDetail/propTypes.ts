import {MoleculeImageCarouselData} from "@/app/components/molecules/ImageCarousel/propTypes";

export type TemplateProductDetailData = {
    id: string;
    title: string;
    description: string;
    price: number;
    discount?: number;
    isNew?: boolean;
    weight: number;
    material: string;
    dimensions: string;
    image: {
        data: {
            attributes: {
                url: string;
            }
        }
    };
    imageCarousel: MoleculeImageCarouselData;
    price_id: string;
}