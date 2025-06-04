import React from 'react';
import PageBanner from "@/components/pageBanner";
import ContactInfoSection from "@/components/contact-info-section";
import EnquiryFormSection from "@/components/enquiry-form-section";
import LocationSection from "@/components/location-section";

const Page = async () => {
    return (
        <div className={'min-h-screen'}>
            <PageBanner img={'/abu.webp'}/>
            <ContactInfoSection/>
            <EnquiryFormSection/>
            <LocationSection/>
        </div>
    );
};

export default Page;