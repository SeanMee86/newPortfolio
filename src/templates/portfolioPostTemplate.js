import React from 'react'

import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import portfolioPostStyles from './portfolioPost.module.scss'

export const query = graphql`
    query($slug: String!) {
      contentfulPortfolioPost(slug: {eq: $slug}) {
        portfolioPostTitle
        portfolioPostSnippet {
            portfolioPostSnippet
        }
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

    console.log(postData)
    return (
        <Layout>
            <SEO title={postData.portfolioPostTitle}/>
            <div>
                <h1>{postData.portfolioPostTitle}</h1>
                <img className={portfolioPostStyles.portfolioImg} src={postData.portfolioPostImage[0].file.url} alt=""/>
                <p>{postData.portfolioPostSnippet.portfolioPostSnippet}</p>
            </div>
        </Layout>
    )
};

export default PortfolioPost