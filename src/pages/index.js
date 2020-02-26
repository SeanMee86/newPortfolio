import React, {useEffect, useState, useRef} from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

    const textArray = 'My name is Sean Mee I am a Full Stack Web Developer Living in Southern California Specializing in JavaScript'.split('');

    const [text, setText] = useState({
        line1: ''
    });

    const textRef = useRef();

    const addLine = (obj, newLine) => {
        setText(obj);
    };

    useEffect(() => {
        let newLine = '';
        let counter = 0;
        const addLine1 = setInterval(() => {
            newLine = newLine + textArray[counter];
            addLine({...text, line1: newLine}, newLine);
            counter++;
            if(counter >= textArray.length){
                clearInterval(addLine1);
            }
        }, 50);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Layout>
            <SEO title="Home" />
            <div className={indexStyles.container}>
                <p ref={textRef}>{text.line1}</p>
            </div>
        </Layout>
    )
}

export default IndexPage
