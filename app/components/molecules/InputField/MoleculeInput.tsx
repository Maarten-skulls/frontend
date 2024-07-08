import React from 'react';
import {MoleculeInputData} from "@/app/components/molecules/InputField/propTypes";
import {InputType} from "@/app/components/commonEnums";

const MoleculeInput = ({data}: { data: MoleculeInputData}) => {
    function Type() {
        let type: string;

        switch (data.type) {
            case InputType.Text:
                type = 'text';
                break;
            case InputType.Email:
                type = 'email';
                break;
            case InputType.Password:
                type = 'password';
                break;
            default:
                return '';
        }
        return type;
    }
    return (
        <div className={"flex flex-col gap-2 w-96 mx-auto mb-6"}>
            <label className={"text-left"}>
                {data.label}
            </label>
            {data.type === "Textbox" ? (
                <textarea className={"p-2 bg-onSurface rounded-md"} rows={6}></textarea>
                ) :
                <input type={Type()} className={"p-2 bg-onSurface rounded-md"}/>
            }
        </div>
    );
};

export default MoleculeInput;