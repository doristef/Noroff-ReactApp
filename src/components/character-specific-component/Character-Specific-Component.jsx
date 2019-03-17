// Imports
import React from 'react'

export default class CharacterSpecificComponent extends React.Component {
    render() {
        return (
<div className="[ card ]">
        <div className="[ row ] [ no-gutters ]">
            <div className="[ col-sm-auto ]">
                <img src={this.props.image} className="[ card-img-top ][ h-100 ]"  alt={this.props.name} />
            </div>
            <div className="[ col-sm-auto ]">
                <div className="[ card-block ] [ px-2 ]">
                    <h1 className="[ card-title m-3 ]"> {this.props.name}</h1>
                    <p className="[ card-text ][ px-2 ml-4 mb-5 ]">
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
            </div>
        </div>
        <div className="[ card-footer ] [ w-100 ] [ text-muted ]">
        <b>Episodes: </b>
                <span className="[ p-1 pl-3 ][ d-block ]"> 
               
                    {this.props.episodes.map((episode, key) => 
                            <span key={key} className="[ badge badge-success ][ p-2 m-2 ]"> {'Episode ' + episode.substring(episode.lastIndexOf('/')+1) } </span>)}
                
                </span>
        </div>
    </div>

        )
    }
}