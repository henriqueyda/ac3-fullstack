import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Api from './Api';

export default function App() {
  return (
      <>
    <header>
    <p><Link to='/api'>Api</Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/api' component= {Api}/>
        </Switch>
      </main></>
  );
}
