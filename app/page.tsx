import {getPageBySlug} from "@/app/utils/get-page-by-slug";
import TemplatePage from "@/app/components/template/Page/TemplatePage";


async function Page() {
    try {
        const page = await getPageBySlug('homepage');

        if (page.error && page.error.status == 401) {
            console.log("Error");
        }

        if (page.data.length == 0) {
            return null;
        }

        const sections = page.data[0].attributes.section;

        return <TemplatePage data={{sections}} />

    } catch (error: any) {
        console.error(error);
    }
}

export default Page;