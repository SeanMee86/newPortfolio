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
            portfolioPostTitle
            portfolioPostType
            portfolioPostImage {
              file {
                url
              }
            }
            portfolioPostBody {
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
    }
`

const Portfolio = (props) => {

    const projects = props.data.allContentfulPortfolioPost.edges;

    const printProjects = (type) => projects
        .filter(project => project.node.portfolioPostType === type)
        .map((project, ind) => {

            console.log(project.node.portfolioPostBody);

            const styles = {
                background: `url(${project.node.portfolioPostImage !== null ? project.node.portfolioPostImage[0].file.url : ''})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover'
            };

            return (
                <Link to={`/portfolio/${project.node.slug}`}>
                    <div
                        key={ind}
                        style={styles}
                        className={portfolioStyles.project}>
                        <div className={portfolioStyles.inner}>
                            <h3>{project.node.portfolioPostTitle}</h3>
                        </div>
                        <div className={portfolioStyles.bottomContent}>
                            <p>{project.node.portfolioPostBody.content[0].content[0].value}</p>
                        </div>
                    </div>
                </Link>
            )
        });

    return (
        <Layout>
            <SEO title={'Services'}/>
            <div>
                <h1 className={portfolioStyles.header}>My Work</h1>
                <h2>Professional Projects</h2>
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
}

export default Portfolio