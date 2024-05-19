import React from 'react';
import {HeroProps} from "@/components/organisms/hero/HeroProps";
import Title from "@/components/atoms/title/Title";
import TextField from "@/components/atoms/textfield/TextField";
import Image from "@/components/atoms/image/Image";

const Hero = (props: HeroProps) => {
    return (
        <div className="relative">
            <Image
                src={props.background}
                alt='Skull of a Sabeltooth Tiger'
                className='absolute inset-0 object-cover w-full h-lvh'
            />
            <div className="relative bg-black bg-opacity-80">
                <div className="h-lvh">
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Title children={props.title} className="text-center"/>
                        <TextField children={props.description} className='text-center'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;