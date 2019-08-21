import React, { Component } from 'react';

class IncrementalCounter extends Component {
  state = { value: 0 };

  componentDidMount() {
    setInterval(
      () => this.setState(prevState => ({ value: prevState.value + 1 })),
      1000
    )
  }

  render() {
    return <h2>{this.state.value}</h2>;
  }
}

export default IncrementalCounter;
