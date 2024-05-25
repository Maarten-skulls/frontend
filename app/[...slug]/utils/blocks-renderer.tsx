import Hero from "@/components/organisms/hero/Hero";
import Article from "@/components/molecules/article/Article";

export function blocksRenderer(section: any, index: number) {
    switch(section.__component) {
        case "blocks.hero":
            return <Hero key={index} title={section.title} description={section.description} background={section.image.data.attributes.url}/>
        case "blocks.article":
            return <Article key={index} title={section.title} description={section.text} widthVariant='full-width'/>
        default:
            return null;
    }
}