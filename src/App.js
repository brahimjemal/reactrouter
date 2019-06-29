import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Person from './Person.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="lol">
          <Link to="/brahim">
            <button>Brahim</button>
          </Link>
          <Link to="/ayoub">
            <button>Ayoub</button>
          </Link>
          <Link to="/omar">
            <button>Omar</button>
          </Link>
        </div>
        <div className="dream">
  <Route path="/brahim" render={() => <Person img="https://robohash.org/145?set=set3" ism="brahim" abc="web developper "/>  }/>
          <Route path="/ayoub" render={() => <Person img="https://robohash.org/140?set=set3" ism="ayoub" abc="working at GOMYCODE sfax"/>}  />
          <Route path="/omar" render={() => <Person img="https://robohash.org/130?set=set3" ism="omar" abc="pupil at monji slim secandary school  " />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
