import {ButtonVariant} from "@/app/components/commonEnums";
import {AtomIconData} from "@/app/components/atoms/Icon/propTypes";
import {AtomLinkData} from "@/app/components/atoms/Link/propTypes";

export interface AtomButtonData {
    icon?: AtomIconData;
    text?: string;
    link?: AtomLinkData;
    onClickHandler?: () => void;
    variant?: ButtonVariant;
}