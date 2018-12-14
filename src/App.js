import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
    }
 componentDidMount() {
     this.getItems();
 }
 getItems() {
    fetch("https://swapi.co/api/people/?page=2")
    .then(Response => Response.json())
    .then(Response => this.setState({'items': [Response]}));
 }
 render() {
     return (
        <div>
            <ul type="none">
                {this.state.items.map(function(item){
                    return<li>next:{item.count}<br/>
                    count:{item.next}<br/> 
                    previous:{item.previous}<br/>
                    results:{item.results}</li>
                }
                )}
            </ul>
        </div>
     );
              
 }
}


export default App;