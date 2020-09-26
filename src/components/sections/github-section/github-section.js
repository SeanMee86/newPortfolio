import React from 'react';
import {GetGithubData} from "../../../assets/utils/gitGithubData";

const GithubSection = () => {

    const gitArray = GetGithubData();

    return (
        <h1>Github Section</h1>
    )
}

export default GithubSection;
