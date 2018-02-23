import React from 'react';

// Components to route to.
import WaitForScreen from '../WaitForScreen/WaitForScreen';
import WaitingsListScreen from '../WaitingsListScreen/WaitingsListScreen';

const AppRoutesProvider = ({ children, passProps }) => {
  return children({
    // Home Screen Routes.
    waitFor: {
      component: WaitForScreen,
      title: 'Scar QR code',
      passProps: passProps
    },
    enterManually: {
      component: WaitingsListScreen,
      title: 'Enter code manually',
      passProps: passProps
    },
    waitingsList: {
      component: WaitingsListScreen,
      title: 'I\'m waiting for',
      passProps: passProps
    },
    seeMore: {
      component: WaitingsListScreen,
      title: 'See more things to wait for',
      passProps: passProps
    },
  });
}

export default AppRoutesProvider;
