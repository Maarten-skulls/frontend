import {AtomImageData} from "@/app/components/atoms/Image/propTypes";

export type MoleculeProductCardData = {
    attributes: {
        title: string;
        slug: string;
        description: string;
        price: number;
        discount: boolean;
        isNew: boolean;
        image: AtomImageData;
    }
}