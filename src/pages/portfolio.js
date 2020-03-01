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
            return (
                <div key={ind} className={portfolioStyles.project}>
                    <Link to={`/portfolio/${project.node.slug}`}>
                    <h3>{project.node.portfolioPostTitle}</h3>
                    </Link>
                </div>
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