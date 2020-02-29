import React, {Component} from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeOut from "../components/typewriter";
import profilePic from "../assets/images/sean-mee-min.jpg.webp"

class IndexPage extends Component{

    linesArray = [
        'My name is Sean Mee',
        'I am a Full Stack Web Developer',
        'Living in Southern California',
        'Specializing in JavaScript'
    ];

    render() {
        return (
            <Layout>
                <SEO title="Home"/>
                <div className={indexStyles.container}>
                    <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                    <TypeOut lines={this.linesArray}/>
                </div>
            </Layout>
        )
    }
}

export default IndexPage;
