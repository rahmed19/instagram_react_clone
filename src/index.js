import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

//client side rendered app (create react app)
// database: firebase
// styling: tailwind
// architecture:
  // - components, constants, context, helpers, lib, services