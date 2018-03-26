/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import MainNavigator from './src/Screens/Navigator';
type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
