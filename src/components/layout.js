/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import  {setConfig } from 'react-hot-loader'
import { useStaticQuery, graphql } from "gatsby"
import layoutStyles from './layout.module.scss'

import Header from "./header"
import Footer from "./footer";
import "./layout.css"

setConfig({
    showReactDomPatchNotification: false
});

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    useEffect(() => {
        setStyles({
            ...styles,
            opacity: 1
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [styles, setStyles] = useState({
        opacity: 0,
        transition: 'opacity 0.2s ease-in'
    });

  return (
    <>
        <div
            className={layoutStyles.container}
            style={{
                margin: `0 auto`,
                maxWidth: 960
            }}
            >
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={layoutStyles.content}>
                <main style={styles}>{children}</main>
            </div>
            <Footer/>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
