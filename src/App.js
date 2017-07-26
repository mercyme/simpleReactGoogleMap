import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Header from './components/parts/header';
import Homepage from './components/pages/homepage';
import MapPage from './components/pages/mappage';

//includes
import './Assets/css/style.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <div className="container">
                <Route exact path='/' component={MapPage} />
                <Route exact path='/intro' component={Homepage}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
