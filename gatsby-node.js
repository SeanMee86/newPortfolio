/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const portfolioPostTemplate = path.resolve('./src/pages/templates/portfolioPostTemplate.js');

    const res = await graphql(`
        query {
            allContentfulPortfolioPost {
                edges {
                    node {
                        slug
                        portfolioPostType
                    }
                }
            }
        }
    `);

    res.data.allContentfulPortfolioPost.edges.forEach(edge => {
        console.log(edge.node.portfolioPostType);
        createPage({
            component: portfolioPostTemplate,
            path: edge.node.portfolioPostType === 'Professional' ? `/professional/${edge.node.slug}` : `/personal/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

};
