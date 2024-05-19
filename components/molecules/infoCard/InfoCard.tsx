import React from 'react';
import {InfoCardProps} from "@/components/molecules/infoCard/InfoCardProps";
import IconTitle from "@/components/atoms/iconTitle/IconTitle";
import Card from "@/components/atoms/card/Card";

const InfoCard = (props: InfoCardProps) => {
    return (
        <Card className='bg-primary text-bg rounded-lg p-4'>
            <IconTitle icon={props.icon} title={props.title} className='text-[24px] flex items-center'/>
            <div>
                <p>{props.text}</p>
            </div>
        </Card>
    );
};

export default InfoCard;