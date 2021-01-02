import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles.js';
const joeyImage = require('../../joeyImages/home.jpg');
const Home = ({history}) => {
  return (
    <SafeAreaView style={styles.notches}>
      <Text style={styles.title}>Joey not Joey</Text>
      <Image source={joeyImage} style={{flex: 5}} />
      <View>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text
            style={styles.appButtonText}
            onPress={() => {
              history.push('/singleplayer');
            }}>
            Single Player Mode
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            history.push('/multiplayerlanding');
          }}>
          <Text style={styles.appButtonText}>Multiplayer Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            history.push('/highscore');
          }}>
          <Text style={styles.appButtonText}>View High Score</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
