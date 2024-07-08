import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomLinkData} from "@/app/components/atoms/Link/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";

export type OrganismHeaderData = {
    title: AtomTitleData;
    links: {
        title?: AtomTitleData;
        link: {
            text: string;
            link: AtomLinkData;
        }[]
    };
    button: AtomButtonData[];
}