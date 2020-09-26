import React, {Component} from 'react';

class SectionLayout extends Component {
    render() {
        const padding = !this.props.isHome ? "50px" : null
        return (
            <div id={this.props.anchorTag} style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column", paddingTop: padding}}>
                {this.props.children}
            </div>
        )
    }
}

export default SectionLayout;
