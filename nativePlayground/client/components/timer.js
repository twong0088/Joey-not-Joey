import * as React from 'react';
import {View, Animated} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Timer = props => {
  return (
    <View style={props.overallStyle}>
      <CountdownCircleTimer
        key={props.reset}
        isPlaying
        size={100}
        duration={20}
        colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000', 0.2]]}
        onComplete={props.timesUp}>
        {({remainingTime, animatedColor}) => (
          <Animated.Text style={{...props.time, color: animatedColor}}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export default Timer;
