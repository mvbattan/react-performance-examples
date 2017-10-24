import React, { Component } from 'react';

import IncrementalCounter from './components/IncrementalCounter';

class App extends Component {
  state = { messageToShow: 'Hi Meetup.js !' };

  hideMessage = () => {
    this.setState(() => ({ messageToShow: null }));
  }

  render() {
    return this.state.messageToShow ? (
      <div>
        <IncrementalCounter />
        <h2>{this.state.messageToShow}</h2>
        <button onClick={this.hideMessage}>Hide Message !</button>
      </div>
    ) : (
      <IncrementalCounter />
    );
  }
}

export default App;
