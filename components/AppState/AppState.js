import React, { Component } from 'react';

function addWaiting(item) {
  return (state) => {
    return {
      waitingsList: state.waitingsList.concat(item)
    }
  }
}

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingWaitingsList: false,
      waitingsList: [
        { title: 'First test harcoded item'}
      ]
    }

    this.toggleEditingWaitingsList = this.toggleEditingWaitingsList.bind(this);
  }

  toggleEditingWaitingsList() {
    console.log('toggling', this.state.editingWaitingsList);
    this.setState(state => {
      return {
        editingWaitingsList: !state.editingWaitingsList
      }
    })
  }

  render() {
    return this.props.children(
      this.state,
      {
        addWaiting: (item) => this.setState(addWaiting(item)),
        toggleEditingWaitingsList: this.toggleEditingWaitingsList
      }
    );
  }
}

export default AppState;
