import React from 'react';

// Components to route to.
import WaitForScreen from '../WaitForScreen/WaitForScreen';
import WaitingsListScreen from '../WaitingsListScreen/WaitingsListScreen';

const AppRoutesProvider = ({ children }) => {
  return children({
    // Home Screen Routes.
    waitFor: {
      component: WaitForScreen,
      title: 'Scar QR code'
    },
    enterManually: {
      component: WaitingsListScreen,
      title: 'Enter code manually'
    },
    waitingsList: {
      component: WaitingsListScreen,
      title: 'I\'m waiting for'
    },
    seeMore: {
      component: WaitingsListScreen,
      title: 'See more things to wait for'
    },
  });
}

export default AppRoutesProvider;
