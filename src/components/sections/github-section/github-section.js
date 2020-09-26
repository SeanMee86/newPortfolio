import React, {useEffect} from 'react';
import {GetGithubData} from "../../../assets/utils/gitGithubData";
import buildChart from '../../../assets/utils/d3Data'

const GithubSection = () => {

    useEffect(() => {
        buildChart(gitArray);
    }, [])

    const gitArray = GetGithubData();

    return (
        <>
        <h1>My Github Data</h1>
        <div style={{width: "100%"}} id={'data-section'}/>
            <p>This live graph was built using GraphQL and D3JS. You can view my GitHub <a href={'https://github.com/SeanMee86'} target={'_blank'} rel={'noopener noreferrer'}>here</a>.</p>
        </>
    )
}

export default GithubSection;
