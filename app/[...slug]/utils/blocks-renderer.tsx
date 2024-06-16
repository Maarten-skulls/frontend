import Hero from "@/components/organisms/hero/Hero";
import Article from "@/components/molecules/article/Article";
import Section from "@/components/organisms/section/Section";
import StatList from "@/components/molecules/statList/StatList";

export function blocksRenderer(section: any, index: number) {
    switch(section.__component) {
        case "blocks.hero":
            return <Hero key={index} title={section.title} description={section.description} background={section.image.data.attributes.url}/>
        case "blocks.article":
            return <Article key={index} title={section.title.title} titleType={section.title.titleType} description={section.text} widthVariant='full-width'/>
        case "blocks.section":
            return <Section key={index} title={section.title} description={section.description} buttons={section.button} cards={section.card} image={section.sideImage.data.attributes.url}/>
        case "blocks.stats-list":
            return <StatList key={index} stats={section.Statistics}/>
        default:
            return null;
    }
}