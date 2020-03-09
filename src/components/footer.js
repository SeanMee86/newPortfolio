import React from "react";

const Footer = () => {
    const style = {
        marginTop: '20px'
    };
    return (
        <footer style={style}>
            Website Created by Sean Mee using GatsbyJS and Contentful CMS &copy; {new Date().getFullYear()}
        </footer>
    )
};

export default Footer