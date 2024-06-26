import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";

export type OrganismHeroData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    image: AtomImageData;
    button?: AtomButtonData[];
}