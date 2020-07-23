import React from 'react';
import './App.css';
import  { Router }  from '@reach/router';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path = "/"/>
        <CreateAuthor  path ="/new"/>
        <EditAuthor path ="/edit/:id"/>
      </Router>

    </div>
      
  );
}

export default App;
