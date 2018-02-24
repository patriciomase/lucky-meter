import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingWaitingsList: false,
      waitingsList: [
        { title: 'First test harcoded item'}
      ]
    }

    this.addWaiting = this.addWaiting.bind(this);
    this.toggleEditingWaitingsList = this.toggleEditingWaitingsList.bind(this);
  }

  addWaiting(item) {
    this.setState((state) => {
      return {
        waitingsList: state.concat(item)
      }
    })
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
        addWaiting: this.addWaiting,
        toggleEditingWaitingsList: this.toggleEditingWaitingsList
      }
    );
  }
}

export default AppState;
