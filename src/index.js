import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'
import { firebase, FieldValue } from './lib/firebase'

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