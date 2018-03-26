/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import MainNavigator from './src/Screens/Navigator';
type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
  }

  render() {

    return (
      <MainNavigator />
      
    );
  }
}
