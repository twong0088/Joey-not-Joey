import React from 'react';
import {View, Button} from 'react-native';

const LifeLines = props => (
  <View style={props.lifeLinesStyling}>
    <Button title="50/50" onPress={props.omitHalf} disabled={props.lifeline1} />
    <Button
      title="Reset Timer"
      onPress={props.reset}
      disabled={props.lifeline2}
    />
    <Button title="Skip" onPress={props.skip} disabled={props.lifeline3} />
  </View>
);

export default LifeLines;
