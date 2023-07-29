import React, { Component, Fragment } from 'react';

export default class ListView extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await new Promise(res => setTimeout(res, 3000, true));
    console.log('component did mount');
  }

  componentDidUnmount = () => {
    console.log('component did unmount');
  }

  render () {
    return (
      <Fragment>{this.props.children || '111'}</Fragment>
    );
  }

}
