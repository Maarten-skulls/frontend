import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {AtomImageData} from "@/app/components/atoms/Image/propTypes";
import {AtomIconData} from "@/app/components/atoms/Icon/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";
import {CardVariant} from "@/app/components/commonEnums";

export type MoleculeCardData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    image: AtomImageData;
    icon: AtomIconData;
    button: AtomButtonData[];
    variant: CardVariant;
}