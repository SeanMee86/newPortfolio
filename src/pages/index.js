import React, {Component} from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import HeroSection from "../components/hero-section/hero-section";

class IndexPage extends Component{

    render() {
        return (
            <Layout>
                <SEO title="Home"/>
                <HeroSection/>
            </Layout>
        )
    }
}

export default IndexPage;
