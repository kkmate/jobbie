/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import { WelcomeScreen, SettingsScreen } from './src/Screens';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      settings: { screen: SettingsScreen }
    });
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
});
