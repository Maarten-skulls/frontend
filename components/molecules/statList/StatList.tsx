import React from 'react';
import {StatListProps} from "@/components/molecules/statList/StatListProps";
import Counter from "@/components/atoms/counter/Counter";

const StatList = (props: StatListProps) => {
    return (
        <div className='mt-32 px-20'>
            <div className='flex flex-row justify-center gap-32'>
                {props.stats.map(item => (
                    <Counter key={item.id} title={item.title} counter={item.count}/>
                ))}
            </div>
        </div>
    );
};

export default StatList;