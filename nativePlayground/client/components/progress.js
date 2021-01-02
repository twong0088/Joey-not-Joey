import * as Progress from 'react-native-progress';
import * as React from 'react';
import {View, Text} from 'react-native';

const ProgressBar = props => (
  <View style={props.pBarStyling}>
    <Progress.Bar
      progress={Number(props.progress) / 20}
      width={300}
      height={25}
    />
    <Text style={{fontSize: 20}}> {props.progress}/20</Text>
  </View>
);

export default ProgressBar;
