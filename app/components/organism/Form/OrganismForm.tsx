import React, {FormEvent} from 'react';
import {OrganismFormData} from "@/app/components/organism/Form/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import MoleculeInput from "@/app/components/molecules/InputField/MoleculeInput";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const OrganismForm = ({data}: { data: OrganismFormData }) => {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('api/contactRequests', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className={"px-8 flex flex-col gap-8 mx-auto text-center"}>
            <AtomTitle data={data.title}/>
            <AtomParagraph data={data.description}/>
            <form>
                {data.inputFields && data.inputFields.map((item, index) => (
                    <MoleculeInput data={{...item}} key={index}/>
                ))}
                <AtomButton data={data.button} className={"mx-auto"}/>
            </form>
        </div>
    );
};

export default OrganismForm;