import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {MoleculeCardData} from "@/app/components/molecules/Card/propTypes";

export type OrganismCardListData = {
    title?: AtomTitleData;
    description?: AtomParagraphData;
    card: MoleculeCardData[];
}