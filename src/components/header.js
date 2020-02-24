import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => {
    return (
        <header>
            <h1>{siteTitle}</h1>
            <nav>
                <ul className={headerStyles.list}>
                    <li><Link to={'/'} activeClassName={headerStyles.active}>Home</Link></li>
                    <li><Link to={'/about'} activeClassName={headerStyles.active}>About</Link></li>
                    <li><Link to={'/contact'} activeClassName={headerStyles.active}>Contact</Link></li>
                    <li><Link to={'/services'} activeClassName={headerStyles.active}>Services</Link></li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
