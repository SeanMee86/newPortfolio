import React, {Component} from "react"

import SEO from "../components/seo/seo"
import HeroSection from "../components/hero-section/hero-section";
import Layout from "../components/layout/layout";
import AboutSection from "../components/about-section/about-section";
import PortfolioSection from "../components/portfolio-section/portfolio-section";
import ServicesSection from "../components/services-section/services-section";
import ContactSection from "../components/contact-section/contact-section";
import SectionLayout from "../components/section-layout/sectionLayout";

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
