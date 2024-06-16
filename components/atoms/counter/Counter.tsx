import React from 'react';
import SubTitle from "@/components/atoms/subtitle/SubTitle";
import Card from "@/components/atoms/card/Card";
import {CounterProps} from "@/components/atoms/counter/CounterProps";

const Counter = (props: CounterProps) => {
    return (
        <div>
            <h3 className='font-medium text-center'>{props.title}</h3>
            <Card
                className='text-[64px] border-white text-center border-b-2'
                children={props.counter}
            />
        </div>
    );
};

export default Counter;