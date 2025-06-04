import {HeroSlider} from "@/components/mainBanner";
import {CompanyIntro} from "@/components/company-intro";
import {FeaturedProperties} from "@/components/featured-properties";
import {FeaturedProjects} from "@/components/featured-projects";
import {InTheNews} from "@/components/news";
import ExperienceSection from "@/components/experience-section";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroSlider/>
            <CompanyIntro/>
            <FeaturedProperties/>
            <ExperienceSection/>
            <FeaturedProjects/>
            <InTheNews/>
        </div>
    )
}
