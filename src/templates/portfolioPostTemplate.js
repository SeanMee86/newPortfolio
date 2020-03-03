import React, {useState} from 'react'

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
          title
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

    const [currentImage, setCurrentImage] = useState({
        image: postData.portfolioPostImage[0].file.url,
        alt: postData.portfolioPostImage[0].title
    });

    const changeImageHandler = (url, altTag) => {
        setCurrentImage({
            image: url,
            alt: altTag

        });
    };

    /* eslint-disable */
    const createCarousel = () => postData.portfolioPostImage.map((img, ind) => (
        <img
            className={portfolioPostStyles.imgThumbnail}
            key={ind}
            onClick={() => changeImageHandler(img.file.url, img.title)}
            src={img.file.url}
            alt={img.title}/>
    ));
    /* eslint-enable */

    return (
        <Layout>
            <SEO title={postData.portfolioPostTitle}/>
            <div>
                <h1>{postData.portfolioPostTitle}</h1>
                <img className={portfolioPostStyles.portfolioImg} src={currentImage.image} alt={currentImage.alt}/>
                <p>{postData.portfolioPostSnippet.portfolioPostSnippet}</p>
                <div className={portfolioPostStyles.carousel}>
                {createCarousel()}
                </div>
            </div>
        </Layout>
    )
};

export default PortfolioPost