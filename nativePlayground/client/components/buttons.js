import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, SafeAreaView, Image} from 'react-native';

const Buttons = props => {
  return (
    <View style={props.containerButtons}>
      <View style={props.buttonCouplet}>
        <TouchableOpacity
          style={props.button}
          onPress={() => {
            props.selectAnswer(props.images[props.randomIndex].joey);
          }}
          disabled={
            props.omitHalf ? props.images[props.randomIndex].disable : false
          }>
          <Image
            source={props.images[props.randomIndex].url}
            style={
              props.omitHalf && props.images[props.randomIndex].disable
                ? props.greyedOut
                : props.buttonIcon
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={props.button}
          onPress={() => {
            props.selectAnswer(props.images[(props.randomIndex + 1) % 4].joey);
          }}
          disabled={
            props.omitHalf
              ? props.images[(props.randomIndex + 1) % 4].disable
              : false
          }>
          <Image
            source={props.images[(props.randomIndex + 1) % 4].url}
            style={
              props.omitHalf &&
              props.images[(props.randomIndex + 1) % 4].disable
                ? props.greyedOut
                : props.buttonIcon
            }
          />
        </TouchableOpacity>
      </View>
      <View style={props.buttonCouplet}>
        <TouchableOpacity
          style={props.button}
          onPress={() => {
            props.selectAnswer(props.images[(props.randomIndex + 2) % 4].joey);
          }}
          disabled={
            props.omitHalf
              ? props.images[(props.randomIndex + 2) % 4].disable
              : false
          }>
          <Image
            source={props.images[(props.randomIndex + 2) % 4].url}
            style={
              props.omitHalf &&
              props.images[(props.randomIndex + 2) % 4].disable
                ? props.greyedOut
                : props.buttonIcon
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={props.button}
          onPress={() => {
            props.selectAnswer(props.images[(props.randomIndex + 3) % 4].joey);
          }}
          disabled={
            props.omitHalf
              ? props.images[(props.randomIndex + 3) % 4].disable
              : false
          }>
          <Image
            source={props.images[(props.randomIndex + 3) % 4].url}
            style={
              props.omitHalf &&
              props.images[(props.randomIndex + 3) % 4].disable
                ? props.greyedOut
                : props.buttonIcon
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
