import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  _renderButton = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          light
          transparent
          iconRight
          style={styles.button}
          onPress={this.props.onComplete}
        >
          <Text> Start </Text>
          <Icon name='arrow-forward' />
        </Button>
      );
    }
  }

  _renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.text}> {slide.text} </Text>
          {this._renderButton(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex:1 }}
      >
        {this._renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    padding: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer: {}
};

export default Slides;

Slides.propTypes = {
  data: PropTypes.array,
  onComplete: PropTypes.func
};
