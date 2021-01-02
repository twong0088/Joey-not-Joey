import React from 'react';
import {View, Text} from 'react-native';

const Score = props => {
  return (
    <View style={props.styling}>
      {props.counter > 1 ? (
        <Text style={props.styling}>
          Score: {props.score}/{props.counter - 1} | {Math.round((100 * props.score) / (props.counter - 1))}%
        </Text>
      ) : (
        <Text style={props.styling}>Score: {props.score / props.counter}%</Text>
      )}
    </View>
  );
};

export default Score;
