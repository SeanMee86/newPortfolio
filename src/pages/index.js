import React, {useEffect, useState} from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {


    let [text, setText] = useState('');
    let [counter, setCounter] = useState(0);

    const textArray = 'My name is Sean Mee I am a Full Stack Web Developer Living in Southern California Who Specializes in JavaScript'.split('');


    useEffect(() => {
        const addChar = setInterval(() => {
            setText(text = text + textArray[counter]);
            setCounter(counter = counter+1);
            if(counter >= textArray.length){
                clearInterval(addChar);
            }
        }, 50);
    }, []);

    return(
        <Layout>
            <SEO title="Home" />
            <div className={indexStyles.container}>
                <p>{text}</p>
            </div>
        </Layout>
    )
}

export default IndexPage
