import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {MoleculeFaqItemData} from "@/app/components/molecules/FaqItem/propTypes";

export type OrganismFaqData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    items: MoleculeFaqItemData[];
}