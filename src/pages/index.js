import React, {Component} from "react"
import indexStyles from './index.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeOut from "../components/typewriter";
import profilePic from "../assets/images/sean-mee-min.jpg"

class IndexPage extends Component{

    render() {
        return (
            <Layout>
                <SEO title="Home"/>
                <div className={indexStyles.container}>
                    <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                    <TypeOut delay={50}>
                        <p>My name is Sean Mee</p>
                        <p>I am a Full Stack Web Developer</p>
                        <p>Living in Southern California</p>
                        <p>Specializing in JavaScript</p>
                    </TypeOut>
                </div>
            </Layout>
        )
    }
}

export default IndexPage;
