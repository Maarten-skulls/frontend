import React from 'react';
import Button from "@/components/atoms/button/Button";
import Image from "@/components/atoms/image/Image";
import {SectionProps} from "@/components/organisms/section/SectionProps";
import Article from "@/components/molecules/article/Article";
import InfoCard from "@/components/molecules/infoCard/InfoCard";

const Section = (props: SectionProps) => {
    return (
        <div>
            <div className='mt-32 px-20 flex justify-between'>
                <div>
                    <Article title={props.title} titleType={'h2'} description={props.description} widthVariant='half-width'/>
                    <div className='mt-8 flex gap-4'>
                        {
                            props.buttons.map(item => (
                                <Button key={item.id} children={item.title} variant={item.style} disabled={false}/>
                            ))
                        }
                    </div>
                    <div className='mt-8 flex gap-4'>
                        {
                            props.cards.map(item => (
                                <InfoCard key={item.id} title={item.title} icon={item.icon} text={item.description} classname='w-64'/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <Image src={props.image} alt='test' className='rounded-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default Section;