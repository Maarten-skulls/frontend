import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {MoleculeInputData} from "@/app/components/molecules/InputField/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";

export type OrganismFormData = {
    title: AtomTitleData;
    description: AtomParagraphData;
    inputFields: MoleculeInputData[];
    button: AtomButtonData;
}