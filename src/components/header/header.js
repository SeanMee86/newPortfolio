import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby';
import React, {useRef} from "react"
import * as headerStyles from './header.module.scss'
import siteLogo from "../../assets/images/smdw-logo.png";

const Header = () => {

    const inputRef = useRef();

    const onLinkClick = () => {
        inputRef.current.checked = false;
    }

    return (
        <header className={headerStyles.main}>
            <Link to={'/'} style={{margin: "15px"}}>
                <img
                    width={400}
                    src={siteLogo}
                    alt="Site Logo"/>
            </Link>
            <div className={headerStyles.menuWrapper}>
                <input
                    ref={inputRef}
                    title={'Menu Box'}
                    type="checkbox"
                    className={headerStyles.toggler}/>
                <div className={headerStyles.hamburger}>
                    <div/>
                </div>
                <nav className={headerStyles.menu}>
                    <div>
                        <div>
                            <ul className={headerStyles.list}>
                                <li>
                                    <AnchorLink
                                        to={'/#home'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>Home</button>
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to={'/#portfolio'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>Portfolio</button>
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to={'/#services'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>Services</button>
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to={'/#github'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>GitHub Data</button>
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to={'/#about'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>About</button>
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to={'/#contact'}
                                        activeClassName={headerStyles.active}>
                                        <button onClick={onLinkClick}>Contact</button>
                                    </AnchorLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
