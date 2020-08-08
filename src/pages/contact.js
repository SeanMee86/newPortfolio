import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

import ContactSection from "../components/contact-section/contact-section";

const Contact = () => {

    return (
        <Layout>
            <SEO title={'Contact'}/>
            <ContactSection/>
        </Layout>
    )
}

export default Contact
