import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
// import axios from 'axios';

// import Ramens from './Ramens';
// import Movie from './Movie';
var unirest = require('unirest');

class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
          ramens: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api?query=라면&display=20')
            .then(res => {
              return res.json();
            }).then( data =>{
              console.log(data);
              let ramens = data.items.map((rm) => {
                              return (
                                <div key={rm.index} className="ramens">
                                  <p>{rm.title}</p>
                                  <img src={rm.image} />
                                </div>
                              )
                            })
              this.setState({ramens: ramens});
            });
    }

    render() {
        return (
          <div className="App">
          <header className="App-header">
            {this.state.ramens}
          </header>
        </div>
      )
    }
}

export default App;