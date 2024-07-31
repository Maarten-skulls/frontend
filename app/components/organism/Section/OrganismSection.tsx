import React from 'react';
import {OrganismSectionData} from "@/app/components/organism/Section/propTypes";
import OrganismHero from "@/app/components/organism/Hero/OrganismHero";
import AtomParagraph from "@/app/components/atoms/Paragraph/AtomParagraph";
import OrganismContent from "@/app/components/organism/Content/OrganismContent";
import OrganismCardList from "@/app/components/organism/CardList/OrganismCardList";
import OrganismPageHeader from "@/app/components/organism/PageHeader/OrganismPageHeader";
import OrganismFaq from "@/app/components/organism/Faq/OrganismFaq";
import OrganismProductList from "@/app/components/organism/ProductList/OrganismProductList";
import OrganismForm from "@/app/components/organism/Form/OrganismForm";
import MoleculeTextBlock from "@/app/components/molecules/TextBlock/MoleculeTextBlock";
import OrganismBlog from "@/app/components/organism/Blog/OrganismBlog";

function OrganismSection({data}: { data: OrganismSectionData }) {
    function getSectionComponent(name: string): React.JSX.Element {
        switch (name) {
            case 'section.hero':
                return <OrganismHero data={data}/>
            case 'section.content':
                return <OrganismContent data={data}/>
            case 'section.card-list':
                return <OrganismCardList data={data}/>
            case 'section.faq':
                return <OrganismFaq data={data}/>
            case 'section.page-header':
                return <OrganismPageHeader data={data}/>
            case 'section.product-list':
                return <OrganismProductList data={data}/>
            case 'section.form':
                return <OrganismForm data={data}/>
            case 'section.blog':
                return <OrganismBlog data={data}/>
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