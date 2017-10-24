import React, { Component } from 'react';

import Pin from './components/Pin';
import './styles.css';

// range(3) -> [0, 1, 2]
const range = i => [...Array(i).keys()];

class PinList extends Component {
  state = { pins: range(10000) };

  removeItem = pinNumber => {
    const index = this.state.pins.indexOf(pinNumber);
    this.setState(prevState => ({
      pins: [...prevState.pins.slice(0, index), ...prevState.pins.slice(index + 1)]
    }));
  }

  render() {
    return (
      <div className="pin-list">
        {this.state.pins.map(
          pinNumber =>
            <Pin
              tag={pinNumber}
              isPainted={!!(pinNumber % 2)}
              onClick={() => this.removeItem(pinNumber)}
            />
        )}
      </div>
    );
  }
}

export default PinList;
