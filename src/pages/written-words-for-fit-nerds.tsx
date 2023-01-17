import * as React from 'react';
import * as logo from "../assets/images/logo.png";
import * as conan from "../assets/images/conan.jpg";

interface IWWFNPageProps {
}

const WWFNPage: React.FunctionComponent<IWWFNPageProps> = (props) => {    
  return (
    <main style={{
        maxWidth: "900px",
        padding: "0 24px",
        margin: "auto"
    }}>
        <header style={{textAlign: "center", padding: "0 40px"}}>
            <img src={logo.default} alt="" style={{maxWidth: "400px", width: "100%"}} />
        </header>
        <hr />
        First Book:
        <img src={conan.default} alt="" style={{
            maxWidth: "450px",
            margin: "20px auto",
            display: "block",
            width: "100%"
        }} />

        
    </main>
  );
};

export default WWFNPage;
