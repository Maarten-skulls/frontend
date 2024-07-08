import React from 'react';
import OrganismSection from "@/app/components/organism/Section/OrganismSection";
import {TemplatePageData} from "@/app/components/template/Page/propTypes";

const TemplatePage = ({data}: { data: TemplatePageData }) => {
    return (
        <main className={"flex flex-col gap-20 md:gap-30 w-full items-center container"}>
            {data.sections && data.sections.map((section, index) => <OrganismSection key={index} data={{...section}}/>)}
        </main>
    );
};

export default TemplatePage;