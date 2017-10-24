import React, { Component } from 'react';
import './styles.css';

import PinList from './components/PinList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <PinList />
      </div>
    );
  }
}

export default App;
