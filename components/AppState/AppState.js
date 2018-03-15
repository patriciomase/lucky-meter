import React, { Component } from 'react';

function initialState() {
  return {
    editingWaitingsList: false,
    waitingsList: [{
      title: 'First test harcoded item'
    }]
  }
}

function addWaiting(item) {
  return (state) => {
    return {
      waitingsList: state.waitingsList.concat(item)
    }
  }
}

function toggleEditingWaitingsList(state) {
  return {
    editingWaitingsList: !state.editingWaitingsList
  }
}

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = initialState()
  }

  render() {
    return this.props.children(
      this.state,
      {
        addWaiting: (item) => this.setState(addWaiting(item)),
        toggleEditingWaitingsList: () => this.setState(toggleEditingWaitingsList)
      }
    );
  }
}

export default AppState;
