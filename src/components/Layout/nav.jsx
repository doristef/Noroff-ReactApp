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
                    <img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" className="[ mx-4 mb-4 ][ d-inline-block]" width="350" alt="Rick and Morty Beige Folder Icon by FreeIconsPNG" />
                    <div className="[ d-inline-block ]"> { this.props.msg } </div>
               </a>
            </nav>
            )
        }
}

