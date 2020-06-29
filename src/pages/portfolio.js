import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from 'gatsby';

import portfolioStyles from './portfolio.module.scss';

export const query = graphql`
    query {
      allContentfulPortfolioPost {
        edges {
          node {
            slug
            order
            portfolioPostTitle
            portfolioPostType
            portfolioPostSnippet {
                portfolioPostSnippet
            }
            portfolioPostImage {
              file {
                url
              }
            }
          }
        }
      }
    }
`;

const Portfolio = (props) => {

    const printProjects = (type) => props.data.allContentfulPortfolioPost.edges
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

    return (
        <Layout>
            <SEO title={'Portfolio'}/>
            <div>
                <h1 className={portfolioStyles.header}>My Work</h1>

                <h2>Professional Websites</h2>
                <div className={portfolioStyles.projectContainer}>
                    {printProjects('Professional')}
                </div>

                <h2>Personal Projects</h2>
                <div className={portfolioStyles.projectContainer}>
                    {printProjects('Personal')}
                </div>
            </div>
        </Layout>
    )
};

export default Portfolio
