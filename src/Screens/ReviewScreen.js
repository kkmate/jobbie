import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import { SCREEN_CONSTANTS } from './';

export class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight:
      <Button
        onPress={
          () => navigation.navigate(SCREEN_CONSTANTS.ID.SettingsScreen)
        }
      >
        <Text>{SCREEN_CONSTANTS.TITLE.SettingsScreen}</Text>
      </Button>,
  });

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}
