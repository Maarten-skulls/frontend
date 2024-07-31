"use client";
import React, {useState} from 'react';
import {OrganismFormData} from "@/app/components/organism/Form/propTypes";
import AtomTitle from "@/app/components/atoms/Title/AtomTitle";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import MoleculeInput from "@/app/components/molecules/InputField/MoleculeInput";
import AtomButton from "@/app/components/atoms/Button/AtomButton";

const OrganismForm = ({data}: { data: OrganismFormData }) => {
    const [formData, setFormData] = useState<{ [key: string]: string}>({});
    const [status, setStatus] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Versturen...");
        console.log(formData);

        try {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!",);
            } else {
                setStatus("Failed to send-mail a message! Please try again");
            }
        } catch (error) {
            console.log(error);
            console.log("An error occured. PLease try again");
        }
    }

    return (
        <div className={"px-8 flex flex-col gap-8 mx-auto text-center"}>
            <AtomTitle data={data.title}/>
            <AtomParagraph data={data.description}/>
            {status &&
                <div className={"w-max border-secondary border rounded-md mx-auto bg-onSurface p-4"}>
                    <p>{status}</p>
                </div>
            }
            <form onSubmit={handleSubmit}>
                {data.inputFields && data.inputFields.map((item, index) => (
                    <MoleculeInput data={{...item}} key={index} handleChange={handleChange}/>
                ))}
                <AtomButton data={data.button} className={"mx-auto"}/>
            </form>
        </div>
    );
};

export default OrganismForm;