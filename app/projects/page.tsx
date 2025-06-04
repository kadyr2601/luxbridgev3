import React from 'react';
import PageBanner from "@/components/pageBanner";
import NewDevelopmentsSection from "@/components/new-developments-section";

const Page = () => {
    return (
        <div className={'min-h-screen'}>
            <PageBanner img={'/abu.webp'}/>
            <NewDevelopmentsSection/>
        </div>
    );
};

export default Page;