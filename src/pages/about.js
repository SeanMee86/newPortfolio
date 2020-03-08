import React from 'react'
import {Link} from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {

    return (
        <Layout>
            <SEO title={'About'}/>
            <div>
                <h1>About Mee</h1>
                <p>Hello, my name is Sean Mee and I've been a professional developer since 2017.</p>
                <p>I started building websites at the young age of 11 and rediscovered my passion for IT in my late 20's.</p>
                <p>I specialize in Full Stack JavaScript development using Front End frameworks, specifically React and Angular2+, NodeJS, and noSQL and SQL databases.</p>
                <p>I am currently employed with Healthcare Success Llc in Irvine California, but am always open to new opportunities to build applications and SAAS products that I can be proud of.</p>
                <p>Feel free to contact me using the form on my <Link to={'/contact'}>contact page</Link>. Cheers!</p>
            </div>
        </Layout>
    )
}

export default About