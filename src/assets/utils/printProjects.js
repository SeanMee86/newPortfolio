import {Link} from "gatsby";
import portfolioStyles from "../../components/sections/portfolio-section/portfolio.module.scss";
import React from "react";

export const printProjects = (type, allContentfulPortfolioPost) => allContentfulPortfolioPost.edges
    .filter(project => project.node.portfolioPostType === type)
    .sort((a, b) => a.node.order - b.node.order)
    .map((project, ind) => {

        const styles = {
            background: `url(${project.node.portfolioPostImage[0].file.url})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover'
        };

        return (
            <Link key={ind}
                  to={`/portfolio/${project.node.slug}`}>
                <div
                    style={styles}
                    className={portfolioStyles.project}>
                    <div className={portfolioStyles.inner}>
                        <h3>{project.node.portfolioPostTitle}</h3>
                    </div>
                    <div className={portfolioStyles.bottomContent}>
                        <p>{project.node.portfolioPostSnippet.portfolioPostSnippet}</p>
                    </div>
                </div>
            </Link>
        )
    });
