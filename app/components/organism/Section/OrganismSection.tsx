import React from 'react';
import {OrganismSectionData} from "@/app/components/organism/Section/propTypes";
import OrganismHero from "@/app/components/organism/Hero/OrganismHero";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";

function OrganismSection({data}: { data: OrganismSectionData }) {
    function getSectionComponent(name: string): React.JSX.Element {
        switch (name) {
            case 'section.hero':
                return <OrganismHero data={data}/>
            default:
                return <AtomParagraph data={{text: 'Sectie wordt niet ondersteund!'}}/>
        }
    }
    
    return (
        <section id={data.__component} className="w-full">
            {getSectionComponent(data.__component)}
        </section>
    );
}

export default OrganismSection;