/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Buttons = props => {
  return (
    <View style={props.containerButtons}>
      <View style={props.buttonCouplet}>
        {props.omitHalf && props.images[props.randomIndex].disable ? (
          <TouchableOpacity
            style={props.button}
            disabled={true}
            activeOpacity={0.5}
            onPress={() =>
              props.selectAnswer(props.images[props.randomIndex].joey)
            }>
            <Image
              source={props.images[props.randomIndex].image}
              style={props.greyedOut}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            onPress={() =>
              props.selectAnswer(props.images[props.randomIndex].joey)
            }>
            <Image
              source={props.images[props.randomIndex].image}
              style={props.buttonIcon}
            />
          </TouchableOpacity>
        )}
        {props.omitHalf && props.images[(props.randomIndex + 1) % 4].disable ? (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            disabled={true}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 1) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 1) % 4].image}
              style={props.greyedOut}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 1) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 1) % 4].image}
              style={props.buttonIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={props.buttonCouplet}>
        {props.omitHalf && props.images[(props.randomIndex + 2) % 4].disable ? (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            disabled={true}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 2) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 2) % 4].image}
              style={props.greyedOut}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 2) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 2) % 4].image}
              style={props.buttonIcon}
            />
          </TouchableOpacity>
        )}
        {props.omitHalf && props.images[(props.randomIndex + 3) % 4].disable ? (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            disabled={true}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 3) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 3) % 4].image}
              style={props.greyedOut}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={props.button}
            activeOpacity={0.5}
            onPress={() =>
              props.selectAnswer(props.images[(props.randomIndex + 3) % 4].joey)
            }>
            <Image
              source={props.images[(props.randomIndex + 3) % 4].image}
              style={props.buttonIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Buttons;
