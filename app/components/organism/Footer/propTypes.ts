import {AtomTitleData} from "@/app/components/atoms/Title/propTypes";
import {AtomParagraphData} from "@/app/components/atoms/Paragraph/propTypes";
import {AtomLinkData} from "@/app/components/atoms/Link/propTypes";
import {AtomButtonData} from "@/app/components/atoms/Button/propTypes";

export type OrganismFooterData = {
    title: AtomTitleData;
    quote: AtomParagraphData;
    links: {
        title: AtomTitleData;
        link: {
            text: string;
            link: AtomLinkData;
        }[];
    }[];
    socials: AtomButtonData[];
}