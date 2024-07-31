import React from 'react';
import {OrganismBlogData} from "@/app/components/organism/Blog/propTypes";

const OrganismBlog = ({data}: { data: OrganismBlogData }) => {
    return (
        <div className={"md:w-1/2 w-2/3 mx-auto flex flex-col gap-10 pt-20"}
            dangerouslySetInnerHTML={{__html: data.content}}
        ></div>
    );
};

export default OrganismBlog;