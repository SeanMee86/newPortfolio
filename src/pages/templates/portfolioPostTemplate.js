import React from 'react'

import {graphql} from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

export const query = graphql`
    query($slug: String!) {
      contentfulPortfolioPost(slug: {eq: $slug}) {
        portfolioPostTitle
        portfolioPostBody {
          content {
            content {
              value
            }
          }
        }
        portfolioPostImage {
          file {
            url
          }
        }
        portfolioPostType
      }
    }
`;

const PortfolioPost = (props) => {

    const postData = props.data.contentfulPortfolioPost;

    return (
        <Layout>
            <SEO title={postData.portfolioPostTitle}/>
            <div>
                <h1>{postData.portfolioPostTitle}</h1>
            </div>
        </Layout>
    )
};

export default PortfolioPost