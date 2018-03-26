import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slides from '../Components/Slides';
import { SCREEN_CONSTANTS } from './';

const SLIDE_DATA = [
  { text: 'Welcome to jobbie', color: '#006199' },
  { text: 'Find your next job', color: '#006199' },
  { text: 'Set your location, then swipe away', color: '#006199' }
];

export class WelcomeScreen extends Component {
  _onSlidesComplete = () => {
    this.props.navigation.navigate(SCREEN_CONSTANTS.ID.MapScreen);
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this._onSlidesComplete}/>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object,
};
