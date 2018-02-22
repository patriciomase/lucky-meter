import React from 'react';

// Components to route to.
import WaitForScreen from '../WaitForScreen/WaitForScreen';

const AppRoutesProvider = ({ render }) => {
  return render({
    waitFor: {
      component: WaitForScreen,
      title: 'So you wanna wait'
    }
  });
}

export default AppRoutesProvider;
