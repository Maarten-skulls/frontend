import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";

export type OrganismPageHeaderData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    background: AtomImageData;
}