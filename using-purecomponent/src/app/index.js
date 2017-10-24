import React, { Component } from 'react';
import './styles.css';

import UserInfo from './components/UserInfo';

class App extends Component {
  state = {
    counter: 0,
    name: 'Manuel',
    phone: '0800-1234',
    email: 'react.dev@wolox.com.ar',
    otherProps: { password: '1234' }
  };

  componentWillMount() {
    setInterval(
      () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        // this.state.otherProps.password = this.state.counter;
      },
      500
    );
  }

  render() {
    return (
      <div className="app">
        <UserInfo {...this.state} />
        <h5>{this.state.counter}</h5>
      </div>
    );
  }
}

export default App;
