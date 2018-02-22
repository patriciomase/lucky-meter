import React from 'react';

// Components to route to.
import WaitForScreen from '../WaitForScreen/WaitForScreen';
import WaitingsListScreen from '../WaitingsListScreen/WaitingsListScreen';

const AppRoutesProvider = ({ render }) => {
  return render({
    waitFor: {
      component: WaitForScreen,
      title: 'So you wanna wait'
    },
    waitingsList: {
      component: WaitingsListScreen,
      title: 'I\'m waiting for'
    }
  });
}

export default AppRoutesProvider;
