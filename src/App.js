import React, { Component } from 'react';
import logo from './logo.svg';

import { PageHeader } from 'react-bootstrap';

import './App.css';
import Body from './Body.js';

class App extends Component {
  
  headerStyles = {
	  align : 'left'
  };

  render() {
    return (
      <div className="App">
        <PageHeader className='main-header'>
          	Hetero-DB
        </PageHeader>
	<hr />
        <div className="main-body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
