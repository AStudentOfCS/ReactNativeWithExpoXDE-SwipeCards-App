// Animation in ReactNative example
import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount () {
    // What's the current position of the element being animated?
    // Where is the item right now?
    this.position = new Animated.ValueXY(0, 0);

    // How is the animation changing?
    // Where is the element moving to?
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render () {
    return (
      // Apply the animation's current position to an actual component
      <Animated.View style={this.position.getLayout()}>
        {/* Which element are moving? */}
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};

export default Ball;
