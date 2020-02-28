import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => {
    return (
        <header>
            <h1 className={headerStyles.heading}>{siteTitle}</h1>
            <div className={headerStyles.menuWrapper}>
                <input title={'Menu Box'} type="checkbox" className={headerStyles.toggler}/>
                <div className={headerStyles.hamburger}><div></div></div>
                <nav className={headerStyles.menu}>
                    <div>
                        <div>
                            <ul className={headerStyles.list}>
                                <li><Link to={'/'} activeClassName={headerStyles.active}>Home</Link></li>
                                <li><Link to={'/about'} activeClassName={headerStyles.active}>About</Link></li>
                                <li><Link to={'/contact'} activeClassName={headerStyles.active}>Contact</Link></li>
                                <li><Link to={'/services'} activeClassName={headerStyles.active}>Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
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
