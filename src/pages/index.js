import React, {useEffect, useState, useRef} from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import profilePic from '../images/sean-mee-min.jpg.webp';

const IndexPage = () => {

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

    const text1Ref = useRef();
    const text2Ref = useRef();
    const text3Ref = useRef();
    const text4Ref = useRef();

    const addLine = (obj, newLine) => {
        setText(obj);
    };

    let lineArray = [];

    const typeWriter = () => {
        let newLine = '';
        let counter = 0;

        lineArray[0] = setInterval(() => {
            newLine = newLine + text1Array[counter];
            addLine({
                line1: newLine
            }, newLine);
            counter++;

            if(counter >= text1Array.length){
                clearInterval(lineArray[0]);
                newLine = '';
                counter = 0;

                lineArray[1] = setInterval(() => {
                    newLine = newLine + text2Array[counter];
                    addLine({
                        line1: text1Ref.current.innerText,
                        line2: newLine
                    });
                    counter++;

                    if(counter >= text2Array.length){
                        clearInterval(lineArray[1]);
                        newLine = '';
                        counter = 0;

                        lineArray[2] = setInterval(() => {
                            newLine = newLine + text3Array[counter];
                            addLine({
                                line1: text1Ref.current.innerText,
                                line2: text2Ref.current.innerText,
                                line3: newLine
                            });
                            counter++;

                            if (counter >= text3Array.length) {
                                clearInterval(lineArray[2]);
                                newLine = '';
                                counter = 0;

                                lineArray[3] = setInterval(() => {
                                    newLine = newLine + text4Array[counter];
                                    addLine({
                                        line1: text1Ref.current.innerText,
                                        line2: text2Ref.current.innerText,
                                        line3: text3Ref.current.innerText,
                                        line4: newLine
                                    });
                                    counter++;

                                    if (counter >= text4Array.length) {
                                        clearInterval(lineArray[3])
                                    }
                                }, 50)
                            }
                        }, 50)
                    }
                }, 50)
            }
        }, 50);
    };

    useEffect(() => {
        typeWriter()
        return () => lineArray.forEach(line => clearInterval(line));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Layout>
            <SEO title="Home" />
            <div className={indexStyles.container}>
                <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                <p ref={text1Ref}>{text.line1}</p>
                <p ref={text2Ref}>{text.line2}</p>
                <p ref={text3Ref}>{text.line3}</p>
                <p ref={text4Ref}>{text.line4}</p>
            </div>
        </Layout>
    )
}

export default IndexPage
