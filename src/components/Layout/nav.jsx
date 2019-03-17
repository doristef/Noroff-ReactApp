// Imports 
import React from 'react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    render() {
        return (
            <nav class="[ header ]">
                <a href="http://doristef.me/semester4/noroff-reactapp/#/" title="Back to home!">
                    <img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" className="[ header--img ] [ mx-4 mb-4 ] [ d-inline-block]" alt="Rick and Morty Beige Folder Icon by FreeIconsPNG" />
                    <div className="[ d-inline-block ]"> <h2 className="[ header--title ]"> { this.props.msg } </h2></div>
                </a>
            </nav>
        )
    }
}

