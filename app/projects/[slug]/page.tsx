import React from 'react';
import PageBanner from "@/components/pageBanner";
import TabNavigationSection from "@/components/tab-navigation-section";
import {
    ProjectOverviewSection,
    PaymentPlanSection,
    LifestyleSection,
    FeaturesAmenitiesSection,
    LocalCommunitySection,
    LocationSection,
} from "@/components/tab-content-sections"

const Page = () => {
    return (
        <div className={'min-h-screen'}>
            <PageBanner img={'/abu.webp'}/>
            <TabNavigationSection/>
            <ProjectOverviewSection />
            <PaymentPlanSection />
            <LifestyleSection />
            <FeaturesAmenitiesSection />
            <LocalCommunitySection />
            <LocationSection />
        </div>
    );
};

export default Page;