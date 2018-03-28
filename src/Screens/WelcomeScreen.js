import React, { Component } from 'react';
import _ from 'lodash';
import { View, AsyncStorage } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';

import Slides from '../Components/Slides';
import { KEY_SKIP_WELCOME } from '../Common/Constants';
import { SCREEN_CONSTANTS } from './';

const SLIDE_DATA = [
  { text: 'Welcome to jobbie', color: '#006199' },
  { text: 'Find your next job', color: '#006199' },
  { text: 'Set your location, then swipe away', color: '#006199' },
];

export class WelcomeScreen extends Component {
  state = {
    skipWelcome: null,
  }

  async componentWillMount() {
    let skipWelcome = await AsyncStorage.getItem(KEY_SKIP_WELCOME);
    if (skipWelcome) {
      this.props.navigation.navigate(SCREEN_CONSTANTS.ID.MapScreen);
    } else {
      this.setState({ skipWelcome: false });
    }
  }

  _onSlidesComplete = () => {
    AsyncStorage.setItem(KEY_SKIP_WELCOME, KEY_SKIP_WELCOME);
    this.props.navigation.navigate(SCREEN_CONSTANTS.ID.MapScreen);
  }

  render() {
    if (_.isNull(this.state.skipWelcome)) {
      return (
        <View style={ styles.container }>
          <Spinner color={'#006199'} />
        </View>
      );
    }

    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this._onSlidesComplete}
      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object,
};
