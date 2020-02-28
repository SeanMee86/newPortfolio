import React, { useEffect, useState } from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeWriter from "../assets/scripts/typewriter"
import profilePic from "../images/sean-mee-min.jpg.webp"


const IndexPage = () => {

    useEffect(() => {
        typeWriter.typeLines(linesArray, setText);
        return () => clearInterval(typeWriter.intervalRef());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [text, setText] = useState({
        line1: '',
        line2: '',
        line3: '',
        line4: ''
    });

    const linesArray = [
        'My name is Sean Mee'.split(''),
        'I am a Full Stack Web Developer'.split(''),
        'Living in Southern California'.split(''),
        'Specializing in JavaScript'.split('')
    ];

    const typeWriter = new TypeWriter();

    const printLines = () => {
        return linesArray
            .map((line,ind) => (
                <p key={ind}>{text[`line${ind+1}`]}</p>
            ));
    };

    return(
        <Layout>
            <SEO title="Home" />
            <div className={indexStyles.container}>
                <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                {printLines()}
            </div>
        </Layout>
    )
};

export default IndexPage;
