import {AtomImageData} from "@/app/components/atoms/Image/propTypes";

export type TemplateProductDetailData = {
    title: string;
    description: string;
    price: number;
    discount?: number;
    isNew?: boolean;
    weight: number;
    material: string;
    dimensions: string;
    image: AtomImageData;
}