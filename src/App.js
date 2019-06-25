import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider store={ store }>
          <Router>
            <div className='App'>
              { routes }
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
