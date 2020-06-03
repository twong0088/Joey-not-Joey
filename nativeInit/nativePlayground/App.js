/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView
} from 'react-native';

import styles from './styles.js';

const App = () => {
  const [text, setText] = useState('');
  
  return (
    <View style ={styles.app}>
      <View style={[styles.gutter, styles.border]} />
      <View style={[styles.main, styles.border]}>
        <Text style={styles.text}>I am React Native App Text Element Trapped in a View</Text>
      </View>
      <View style={[styles.main, styles.border]}>
        <TextInput
            style={styles.text}
            placeholder="Change Me"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
      </View>
      <ScrollView styles={[styles.input, styles.border]}>
        <Text style={styles.text}>In a ScrollView!</Text>
      </ScrollView>
  </View>
  );
};


export default App;
