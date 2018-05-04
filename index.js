import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import LoginPage from './src/components/LoginPage';
import store from './src/store';
 
export default class Beem extends Component {

  

  render() {
    return (
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  }
}
 
AppRegistry.registerComponent('Beem', () => Beem);
