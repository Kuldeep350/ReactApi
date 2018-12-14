// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      items:[]
    }
  }

  componentWillMount() {
    fetch("https://swapi.co/api/people/")
    .then(items => {
      return items.json()
    }).then(json => {
      this.setState({
        items:[json]
      });
      console.log('56',this.state.items)
    });
  }

  render() {

    if (this.state.items) {     
      return this.state.items.map(item => {
        return (
          <div className='col-lg-4' >
          <ol key={item.id}>
            <li>{item.count} </li>
            <li>{item.next} </li>
            <li>{item.previous}</li>
            {/* <li>{item.results}</li> */}
          </ol>
          </div>
        )
      })
    }
    // if (this.state.items) {
    //   const itam = this.state.items.map(item => {
    //     return (
    //       <div className='col-lg-4' key={item.ID}>
    //         {item.count} 
    //       </div>
    //     )
    //   })  
    //   return <div>{itam}</div>
    // }
    // if this.state.articles_list is empty, show a loading spinner or whatever...
    return <div>Nothing yet</div>
  }
}
 
export default App;
