import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import {ContentDirection} from "@/app/components/commonEnums";

export type OrganismContentData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    button: AtomButtonData[];
    image?: AtomImageData;
    direction: ContentDirection;
}