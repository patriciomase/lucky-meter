import React, { Component } from 'react';

function initialState() {
  return {
    // Editing flag.
    editingWaitingsList: false,

    // Things that we can wait for.
    weCanWaitFor: [
      { title: 'Que baje el dolar.', id: 1 },
      { title: 'Turno en la peluquería', id: 2 },
      { title: 'Mesa en el restaurante pepito', id: 3 },
      { title: 'Turno en el lubricentro', id: 4 }
    ],

    // Currently waiting for this.
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
