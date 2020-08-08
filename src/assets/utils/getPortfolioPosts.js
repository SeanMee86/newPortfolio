import {useStaticQuery, graphql} from "gatsby";

export const GetPortfolioPost = () => {
    const { allContentfulPortfolioPost } = useStaticQuery(graphql`
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
    `)
    return allContentfulPortfolioPost;
}
