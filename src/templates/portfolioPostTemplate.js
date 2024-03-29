import React, {useState} from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import {graphql} from "gatsby";
import Layout from "../components/layouts/layout/layout";
import Seo from "../components/seo/seo";
import * as portfolioPostStyles from './portfolioPost.module.scss'

export const query = graphql`
    query($slug: String!) {
      contentfulPortfolioPost(slug: {eq: $slug}) {
        liveUrl
        githubRepo
        portfolioPostTitle
        portfolioPostBody {
          raw
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

const PortfolioPost =
    ({ data: {
           contentfulPortfolioPost: {
            portfolioPostImage,
            portfolioPostTitle,
            liveUrl,
            githubRepo,
            portfolioPostBody
           }
        }
    }) => {
    const [currentImage, setCurrentImage] = useState({
        image: portfolioPostImage[0].file.url,
        alt: portfolioPostImage[0].title
    });

    const changeImageHandler = (url, altTag) => {
        setCurrentImage({
            image: url,
            alt: altTag
        });
    };

    /* eslint-disable */
    const createCarousel = () => portfolioPostImage.map((img, ind) => (
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
            <Seo title={portfolioPostTitle}/>
            <div style={{paddingTop: "60px"}}>
                <h1>{portfolioPostTitle}</h1>
                <img className={portfolioPostStyles.portfolioImg} src={currentImage.image} alt={currentImage.alt}/>
                <div className={portfolioPostStyles.links}>
                    {liveUrl ? <a href={liveUrl} target={'_blank'} rel={"noopener noreferrer"}>Live Site</a> : null}{githubRepo !== null ? <span> | <a href={githubRepo} target={'_blank'} rel={"noopener noreferrer"}>GitHub Repo</a></span> : null}
                </div>
                <div className={portfolioPostStyles.carousel}>
                {createCarousel()}
                </div>
                <p>{renderRichText(portfolioPostBody)}</p>
            </div>
        </Layout>
    )
};

export default PortfolioPost
