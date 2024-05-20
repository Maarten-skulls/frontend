import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import Card from "@/components/atoms/card/Card";
import {CounterProps} from "@/components/molecules/counter/CounterProps";

const Counter = (props: CounterProps) => {
    return (
        <div>
            <h3 className='font-medium text-center'>{props.title}</h3>
            <Card
                className='text-[64px] border-white text-center m-auto w-24 border-2 rounded-full'
                children={props.counter}
            />
        </div>
    );
};

export default Counter;