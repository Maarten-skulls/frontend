import React, {useState} from 'react';
import {MoleculeInputData} from "@/app/components/molecules/InputField/propTypes";
import {InputType} from "@/app/components/commonEnums";

const MoleculeInput = ({data, handleChange}: { data: MoleculeInputData, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}) => {
    const [inputValue, setInputValue] = useState<string>("");
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
        <div className={"flex flex-col gap-2 sm:w-96 w-72 mx-auto mb-6"}>
            <label className={"text-left"} htmlFor={data.label}>
                {data.label}
            </label>
            {data.type === "Textbox" ? (
                <textarea
                    className={"p-2 bg-onSurface rounded-md"}
                    rows={6} name={data.label}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        handleChange(e);
                    }}
                ></textarea>
                ) :
                <input
                    type={Type()}
                    className={"p-2 bg-onSurface rounded-md"}
                    name={data.label}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        handleChange(e);
                    }}/>
            }
        </div>
    );
};

export default MoleculeInput;