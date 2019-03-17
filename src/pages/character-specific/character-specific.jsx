// Imports
import React from 'react'
import CharacterSpecificComponent from './../../components/character-specific-component/Character-Specific-Component'
import Nav from './../../components/Layout/nav'

export default class CharacterSpecific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rickMortyObj: [],
            location: '',
            origin: '',
            episodes: [],
            characterId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/' + app.state.characterId)
            .then(response => {
                return response.json()
            })
            .then(result => {
                app.setState({
                    rickMortyObj: result, location: result.location.name, origin: result.origin.name, episodes: result.episode
                })
            });
    }

    render() {
        const app = this;
    
        let specificCharacter = <CharacterSpecificComponent image={app.state.rickMortyObj.image}
                                                            name={app.state.rickMortyObj.name}
                                                            species={app.state.rickMortyObj.species}
                                                            status={app.state.rickMortyObj.status}
                                                            gender={app.state.rickMortyObj.gender}
                                                            location={app.state.location}
                                                            origin={app.state.origin}
                                                            episodes={app.state.episodes}
        ></CharacterSpecificComponent>;

        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <Nav msg={<h3> Take me back, please!</h3>} /> 
                </div>
                <div className="[ col-sm-12 ][ mb-3 ]">
                        {specificCharacter}
                </div>
            </div>
        )
    }
}