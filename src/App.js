import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []

        }
    }
    componentDidMount() {
        this.getItems();

    }
    getItems() {
        fetch("https://swapi.co/api/people/?page=2")
            .then(Response => Response.json())

            .then(Response => this.setState({ 'items': [Response] }));

    }

    render() {
        return (
            <div>

                <ol type="none" className="ol">
                    {this.state.items.map(function (item) {
                        return <li key={item}>count:{item.count}<br />
                            next:{item.next}<br />
                            previous:{item.previous}<br />
                            
                                {item.results.map(function (result) {
                                    return <li key={item}>
                                        name:{result.name}<br />
                                        Gender==  {result.gender}<br />
                                        Skin_color== {result.skin_color}<br />
                                        Hair_color== {result.hair_color}<br />
                                        Eye_color== {result.eye_color}<br />
                                        Birth_year== {result.birth_year}<br />
                                        Height== {result.height}<br />
                                        Mass== {result.mass}<br />
                                        Homeworld== {result.homeworld}<br />
                                        Films== {result.films}<br />
                                        Species== {result.species}<br />
                                        Vehicles== {result.vehicles}<br />
                                        Starships== {result.starships}<br />
                                        Created== {result.created}<br />
                                        Edited== {result.edited}<br />
                                        Url== {result.url}<br />
                                    </li>
                                }

                                )}
                            

                        </li>
                    }

                    )}
                </ol>
            </div>
        );

    }
}


export default App;