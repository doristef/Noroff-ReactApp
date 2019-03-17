// Imports
import React from 'react'

export default class CharacterComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ] [ h-100 ][ my-3 ]">
                <div className="[ card card-hovering ][ h-100 ][ m-0 p-0 ]">
                    <a href={'#/character-specific/' + this.props.id} title={this.props.name}>
                    
                        <img src={this.props.image} className="[ card-img-top ]" alt={this.props.name} />
                       
                        <div className="[ card-body ]">
                            <h2 className="[ card-title ]"> {this.props.name}</h2>

                            <p className="[ card-text ][ px-2 ]">
                                <b>Species: </b> 
                                <span className="[ p-1 ][ d-inline-block ]"> {this.props.species} </span><br />
                                <b>Status: </b>
                                <span className="[ p-1 ][ d-inline-block ]"> {this.props.status} </span><br />
                                <b>Gender: </b>
                                <span className="[ p-1 ][ d-inline-block ]"> {this.props.gender} </span><br />
                                <b>Location: </b>
                                <span className="[ p-1 pl-3 ][ d-block ]"> {this.props.location} </span>
                                <b>Place of Origin: </b>
                                <span className="[ p-1 pl-3 ][ d-block ]"> {this.props.origin} </span>
                            </p>

                        </div>

                        <div className="[ overlay ]"><h2 className="[ text-muted ]">Click to<br /> View More</h2></div>

                    </a>
                </div>
            </div>
        );
    }
}