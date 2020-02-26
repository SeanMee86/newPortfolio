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

    const typeWriter = () => {
        let newLine = '';
        let counter = 0;

        const addLine1 = setInterval(() => {
            newLine = newLine + text1Array[counter];
            addLine({
                line1: newLine
            }, newLine);
            counter++;

            if(counter >= text1Array.length){
                clearInterval(addLine1);
                newLine = '';
                counter = 0;

                const addLine2 = setInterval(() => {
                    newLine = newLine + text2Array[counter];
                    if(text1Ref.current === null) clearInterval(addLine2);
                    addLine({
                        line1: text1Ref.current !== null ? text1Ref.current.innerText : '',
                        line2: newLine
                    });
                    counter++;

                    if(counter >= text2Array.length){
                        clearInterval(addLine2);
                        newLine = '';
                        counter = 0;

                        const addLine3 = setInterval(() => {
                            newLine = newLine + text3Array[counter];
                            if(text1Ref.current === null) clearInterval(addLine3);
                            addLine({
                                line1: text1Ref.current !== null ? text1Ref.current.innerText : '',
                                line2: text2Ref.current !== null ? text2Ref.current.innerText : '',
                                line3: newLine
                            });
                            counter++;

                            if (counter >= text3Array.length) {
                                clearInterval(addLine3)
                                newLine = '';
                                counter = 0;

                                const addLine4 = setInterval(() => {
                                    newLine = newLine + text4Array[counter];
                                    if(text1Ref.current === null) clearInterval(addLine3);
                                    addLine({
                                        line1: text1Ref.current !== null ? text1Ref.current.innerText : '',
                                        line2: text2Ref.current !== null ? text2Ref.current.innerText : '',
                                        line3: text3Ref.current !== null ? text3Ref.current.innerText : '',
                                        line4: newLine
                                    });
                                    counter++;

                                    if (counter >= text4Array.length) {
                                        clearInterval(addLine4)
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
