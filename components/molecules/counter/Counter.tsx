import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import Card from "@/components/atoms/card/Card";

const Counter = () => {
    return (
        <div className='w-fit text-center'>
            <h3 className='font-mediu'>Products made</h3>
            <Card
                className='text-[64px] w-fit px-11 py-2 border-white border-2 rounded-full'
                children='7'
            />
        </div>
    );
};

export default Counter;