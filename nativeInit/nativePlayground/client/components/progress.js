/* eslint-disable react-native/no-inline-styles */
import * as Progress from 'react-native-progress';
import React from 'react';
import {Text, View} from 'react-native';

const ProgressBar = props => (
  <View style={props.pBarStyling}>
    <Progress.Bar
      progress={Number(props.progress) / 20}
      width={300}
      height={25}
    />
    <Text style={{paddingLeft: 20, fontSize: 20}}>{props.progress}/20</Text>
  </View>
);

export default ProgressBar;
