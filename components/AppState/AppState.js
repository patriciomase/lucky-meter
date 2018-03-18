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
      title: 'Que baje el dolar', id: 1
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

function toggleWaiting(item) {
  console.log('item', item);
  return (state) => {
    if (state.waitingsList.map(i => i.id).includes(item.id)) {
      return {
        waitingsList: state.waitingsList.filter(i => {
          return i.id !== item.id
        })
      }
    }
    return {
      waitingsList: state.waitingsList.concat({ title: item.title, id: item.id })
    }
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
        toggleEditingWaitingsList: () => this.setState(toggleEditingWaitingsList),
        toggleWaiting: (item) => this.setState(toggleWaiting(item))
      }
    );
  }
}

export default AppState;
