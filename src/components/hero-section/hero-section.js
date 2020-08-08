import React, {Component} from "react";
import indexStyles from "./index.module.scss";
import profilePic from "../../assets/images/sean-mee.jpg";
import TypeOut from "../typewriter";

class HeroSection extends Component {
    render() {
        return (
            <div className={indexStyles.container}>
                <img className={indexStyles.portrait} src={profilePic} alt="Photograph of Web Developer Sean Mee"/>
                <TypeOut delay={50}>
                    <p>My name is Sean Mee</p>
                    <p>I am a Full Stack Web Developer</p>
                    <p>Living in Southern California</p>
                    <p>Specializing in JavaScript</p>
                </TypeOut>
            </div>
        )
    }
}

export default HeroSection;
