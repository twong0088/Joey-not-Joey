/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import * as React from 'react';
import {View, Animated} from 'react-native';

const Timer = props => (
  <View style={props.overallStyle}>
    <CountdownCircleTimer
      key={props.reset}
      size={70}
      isPlaying
      duration={20}
      colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000', 0.2]]}
      onComplete={() => {
        props.timesUp();
        return [true, 0];
      }}>
      {({remainingTime, animatedColor}) => (
        <Animated.Text style={{...props.time, color: animatedColor}}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  </View>
);

export default Timer;
