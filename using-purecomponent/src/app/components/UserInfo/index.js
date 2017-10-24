import React, { Component } from 'react';

class UserInfo extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return (nextProps.name !== this.props.name)
  //       || (nextProps.phone !== this.props.phone)
  //       || (nextProps.email !== this.props.email)
  //       || (nextProps.otherProps !== this.props.otherProps);
  // }

  render() {
    console.log('UserInfo is rendering !');
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.phone}</h2>
        <h3>{this.props.email}</h3>
        <h3>{`Pass: ${this.props.otherProps.password}`}</h3>
      </div>
    );
  }
}

export default UserInfo;
