// Imports
import React from 'react'
import CharacterComponent from '../components/character-component/CharacterComponent'
import Search from '../components/search/search'
import Nav from '../components/Layout/nav'

export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rickMortyObj: [],
            rickMortyObjFiltered: [],
            rickMortyCards: [],
            rickMortyFilter: false,
            msg: '',
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }
    
    getData(){
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => {
                return response.json()
            })
            .then(result => {
                app.setState({
                    rickMortyObj: result.results
                })
            });
    }

    handleSearchTerm = (searchTerm) => {
        const app = this;
        let characterObj = app.state.rickMortyObj;

        let characters = characterObj.filter((character) => {
            return character.name.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) !== -1;
        });
        
        app.setState({
            rickMortyCards: [],
            rickMortyObjFiltered: characters,
            rickMortyFilter: true
        },app.createCards());
    }

    createCards() {
        const app = this;
        let rickMortyArray;
        if(app.state.rickMortyFilter){
            rickMortyArray = app.state.rickMortyObjFiltered;
            if( rickMortyArray.length === 0 ) { 
                app.state.msg = <h1> Nothing found! </h1>; 
            }else{
                app.state.msg = '';
            }
        }else{
            rickMortyArray = app.state.rickMortyObj;
        }
    
        rickMortyArray.forEach((value, key) => {
            app.state.rickMortyCards.push(
                <CharacterComponent image={value.image}
                                    name={value.name}
                                    species={value.species}
                                    gender={value.gender}
                                    status={value.status}
                                    location={value.location.name}
                                    origin={value.origin.name}
                                    id={value.id}
                                    key={key}
                ></CharacterComponent>
            );
        });
        
    }

    render() {
        const app = this;
        app.createCards();

        return (
                <div className="[ row ] ">
                    <div className="[ col-sm-12 ]">
                        <div className="[ row align-items-center ]">
                            <div className="[ col-sm-4 ]">
                                <Nav />
                            </div>
                            <div className="[ col-sm-8 ][ mb-3 ]">
                                <h1>
                                    Rick and Morty - Character Database
                                </h1>
                                <Search onSearchTerm={app.handleSearchTerm}></Search>
                            </div>
                        </div>
                    </div>

                    <div className="[ col-sm-12 ]">
                        <div className="[ row ] [ mb-5 ]">
                            <div className="[ text-center ] [ w-100 ]">{ app.state.msg }</div>
                            {app.state.rickMortyCards}
                        </div>
                    </div>
                </div>
                
        )
    }
}