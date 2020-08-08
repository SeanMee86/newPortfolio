import React from 'react'

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import AboutSection from "../components/about-section/about-section";

const About = () => {

    return (
        <Layout>
            <SEO title={'About'}/>
            <AboutSection/>
        </Layout>
    )
}

export default About
