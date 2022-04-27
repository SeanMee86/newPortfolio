import React from "react"
import * as portfolioStyles from "./portfolio.module.scss";
import { GetPortfolioPost } from "../../../assets/utils/getPortfolioPosts";
import { printProjects } from "../../../assets/utils/printProjects";

const PortfolioSection = () => {
    const allContentfulPortfolioPost = GetPortfolioPost();

    return (
        <div>
            <h1 className={portfolioStyles.header}>My Work</h1>

            <h2>Work Projects</h2>
            <div className={portfolioStyles.projectContainer}>
                {printProjects('Professional', allContentfulPortfolioPost)}
            </div>

            <h2>Personal Projects</h2>
            <div className={portfolioStyles.projectContainer}>
                {printProjects('Personal', allContentfulPortfolioPost)}
            </div>
        </div>
    )
}

export default PortfolioSection;
