import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import PortfolioSection from "../components/portfolio-section/portfolio-section";

const Portfolio = () => {
    return (
        <Layout>
            <SEO title={'Portfolio'}/>
            <PortfolioSection />
        </Layout>
    )
};

export default Portfolio
