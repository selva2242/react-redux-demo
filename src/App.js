import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/cakeContainer/cakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/cakeContainer/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer/iceCreamContainer';
import UserContainer from './components/userContainer/userContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
