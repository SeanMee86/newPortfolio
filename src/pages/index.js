import React, {useEffect, useState } from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import profilePic from '../images/sean-mee-min.jpg.webp';

const IndexPage = () => {

    useEffect(() => {
        typeWriter();
        return () => clearInterval(lineInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [text, setText] = useState({
        line1: '',
        line2: '',
        line3: '',
        line4: ''
    });

    const text1Array = 'My name is Sean Mee'.split('');
    const text2Array = 'I am a Full Stack Web Developer'.split('');
    const text3Array = 'Living in Southern California'.split('');
    const text4Array = 'Specializing in JavaScript'.split('');

    const linesArray = [
        text1Array,
        text2Array,
        text3Array,
        text4Array
    ];

    let lineInterval;

    const typeWriter = () => {
        let newLine = '';
        let counter = 0;
        let arrayCounter = 1;

        const intervalTrigger = () => {
            lineInterval = setInterval(() => {
                newLine = newLine + linesArray[arrayCounter - 1][counter];
                setText((prevState) => {
                    return {
                        ...prevState,
                        ['line' + arrayCounter]: newLine
                    }
                });
                counter++;

                if (counter >= linesArray[arrayCounter - 1].length) {
                    clearInterval(lineInterval);
                    if(arrayCounter < linesArray.length) {
                        newLine = '';
                        counter = 0;
                        arrayCounter++;
                        intervalTrigger();
                    }
                }
            }, 50);
        };
        intervalTrigger()
    };

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

export default IndexPage
