import React from 'react';
import {View, Button} from 'react-native';

const LifeLines = props => {
  return (
    <View style={props.lifeLinesStyling}>
      <Button
        title="50/50"
        disabled={props.lifeline1}
        onPress={() => props.omitHalf()}
      />
      <Button
        title="Add Time!"
        disabled={props.lifeline2}
        onPress={() => props.reset()}
      />
      <Button
        title="Skip"
        disabled={props.lifeline3}
        onPress={() => props.skip()}
      />
    </View>
  );
};

export default LifeLines;
