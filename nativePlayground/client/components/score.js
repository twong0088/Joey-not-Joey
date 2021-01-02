import React from 'react';
import {Text} from 'react-native';

const Score = props => {
  return props.counter === 1 ? (
    <Text style={props.styling}>
      Score: {props.score}/{props.counter - 1} |{' '}
      {(100 * props.score) / props.counter}%{' '}
    </Text>
  ) : (
    <Text style={props.styling}>
      Score: {props.score}/{props.counter - 1} |{' '}
      {((100 * props.score) / (props.counter - 1)).toFixed(1)}%{' '}
    </Text>
  );
};

export default Score;
