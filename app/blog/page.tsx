import React from 'react';
import PageBanner from "@/components/pageBanner";
import BlogSection from "@/components/blog-section";

const Page = () => {
    return (
        <div className={'min-h-screen'}>
            <PageBanner img={'/abu.webp'}/>
            <BlogSection/>
        </div>
    );
};

export default Page;