import React, {Component} from "react"

import SEO from "../components/seo/seo"
import HeroSection from "../components/sections/hero-section/hero-section";
import Layout from "../components/layouts/layout/layout";
import AboutSection from "../components/sections/about-section/about-section";
import PortfolioSection from "../components/sections/portfolio-section/portfolio-section";
import ServicesSection from "../components/sections/services-section/services-section";
import ContactSection from "../components/sections/contact-section/contact-section";
import SectionLayout from "../components/layouts/section-layout/sectionLayout";
import GithubSection from "../components/sections/github-section/github-section";

class IndexPage extends Component{
    render() {
        return (
            <Layout>
                <SEO title="Home"/>
                <SectionLayout anchorTag={'home'} isHome={true}>
                    <HeroSection/>
                </SectionLayout>
                <SectionLayout anchorTag={'portfolio'}>
                    <PortfolioSection/>
                </SectionLayout>
                <SectionLayout anchorTag={'services'}>
                    <ServicesSection/>
                </SectionLayout>
                <SectionLayout>
                    <GithubSection/>
                </SectionLayout>
                <SectionLayout anchorTag={'about'}>
                    <AboutSection/>
                </SectionLayout>
                <SectionLayout anchorTag={'contact'}>
                    <ContactSection/>
                </SectionLayout>
            </Layout>
        )
    }
}

export default IndexPage;
