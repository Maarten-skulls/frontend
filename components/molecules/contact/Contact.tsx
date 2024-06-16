import React from 'react';
import TextField from "@/components/atoms/textfield/TextField";
import {ContactProps} from "@/components/molecules/contact/ContactProps";
import Button from "@/components/atoms/button/Button";
import {MdOutlinePhone} from "react-icons/md";
import {CiMail} from "react-icons/ci";

const Contact = (props: ContactProps) => {
    return (
        <div>
            <TextField children={props.title} className="font-semibold"/>
            <div className="mt-4">
                <TextField children={props.address} className="text-[13px]"/>
                <TextField children={props.postalCode} className="text-[13px]"/>
            </div>
            <div className="my-4">
                <div className="flex items-center gap-3"><MdOutlinePhone size={13}/><TextField children={props.phone} className="text-[13px]"/></div>
                <div className="flex items-center gap-3"><CiMail size={13}/><TextField children={props.email} className="text-[13px]"/></div>
            </div>
            <Button variant={props.buttonStyle} disabled={false} children={props.buttonText}/>
        </div>
    );
};

export default Contact;