import React, { Component } from 'react';

function initialState() {
  return {
    // Editing flag.
    editingWaitingsList: false,

    // Things that we can wait for.
    weCanWaitFor: [],

    // Currently waiting for this.
    waitingsList: [{
      title: 'Que baje el dolar', id: 1
    }]
  }
}

function setInitialValue(key, value) {
  return (state) => {
    return {
      [key]: value
    }
  }
}

function addWaiting(item) {
  return (state) => {
    return {
      waitingsList: state.waitingsList.concat(item)
    }
  }
}

function fetchWhatWeCanWait() {
  return fetch('http://localhost:8080/we-can-wait-for.json')
    .then(response => response.json());
}

function toggleEditingWaitingsList(state) {
  return {
    editingWaitingsList: !state.editingWaitingsList
  }
}

function toggleWaiting(item) {
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

  componentDidMount() {
    fetchWhatWeCanWait()
      .then(response => this.setState(
        setInitialValue('weCanWaitFor', response.data))
      );
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
