import React from 'react'

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import ServicesSection from "../components/services-section/services-section";

const Services = () => {

    return (
        <Layout>
            <SEO title={'Services'}/>
            <ServicesSection/>
        </Layout>
    )
};

export default Services
