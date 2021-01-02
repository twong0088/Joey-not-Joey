/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from '../styles.js';
const axios = require('axios');

const highScore = ({history}) => {
  const [highScores, getHighScores] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/highscore')
      .then(response => {
        console.log(response.data);
        let scores = response.data;
        getHighScores(scores);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.notches}>
      <View style={styles.hscontainer}>
        <Text style={styles.gameOverTitle}>Joey not Joey</Text>
        <Text style={styles.gameOverSecondaryTitle}>High Scores</Text>

        {/* CUSTOM VIEW ======================================================= */}
        <View>
          <View style={styles.hsheaderrow}>
            <View style={styles.hscell}>
              <Text style={styles.hstext}>Ranking</Text>
            </View>
            <View style={styles.hscell}>
              <Text style={styles.hstext}>Name</Text>
            </View>
            <View style={styles.hscell}>
              <Text style={styles.hstext}>Score</Text>
            </View>
            <View style={styles.hscell}>
              <Text style={styles.hstext}>Time Taken</Text>
            </View>
          </View>
          {highScores.map((score, key) => (
            <View key={key} style={styles.hsrow}>
              <View style={styles.hscell}>
                <Text style={styles.hstext}>{key + 1}</Text>
              </View>
              <View style={styles.hscell}>
                <Text style={styles.hstext}>{score.name}</Text>
              </View>
              <View style={styles.hscell}>
                <Text style={styles.hstext}>{score.score}</Text>
              </View>
              <View style={styles.hscell}>
                <Text style={styles.hstext}>
                  {(score.time / 1000).toFixed(1)} s
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.hsappButtonContainer}>
        <Text
          style={styles.appButtonText}
          onPress={() => {
            history.push('/');
          }}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default highScore;
