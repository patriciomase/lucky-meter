import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waitingsList: [
        { title: 'First test harcoded item'}
      ]
    }
  }

  addWaiting(item) {
    this.setState((state) => {
      return {
        waitingsList: state.concat(item)
      }
    })
  }

  render() {
    return this.props.children(
      this.state,
      {
        addWaiting: this.addWaiting
      }
    );
  }
}

export default AppState;
