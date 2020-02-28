import React, { useEffect } from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeWriter from "../assets/scripts/typewriter"
import profilePic from "../images/sean-mee-min.jpg.webp"


const IndexPage = () => {

    const linesArray = [
        'My name is Sean Mee',
        'I am a Full Stack Web Developer',
        'Living in Southern California',
        'Specializing in JavaScript'
    ];

    const typeWriter = new TypeWriter(linesArray);

    useEffect(() => {
        typeWriter.typeLines();
        return () => clearInterval(typeWriter.intervalRef());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Layout>
            <SEO title="Home" />
            <div className={indexStyles.container}>
                <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                {typeWriter.createLines()}
            </div>
        </Layout>
    )
};

export default IndexPage;
