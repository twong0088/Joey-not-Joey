import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from '../styles.js';
const axios = require('axios');

const HighScore = ({history}) => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/highscore')
      .then(response => {
        console.log(response.data);
        setScores(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    // setScores([{name: 'terrence', score: 12, time: 1235}]);
  }, []);

  return (
    <SafeAreaView style={styles.notches}>
      <Text style={styles.gameOverTitle}>Joey not Joey</Text>
      <Text style={styles.gameOverSecondaryTitle}>High Scores</Text>
      <View style={styles.hscontainer}>
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
        {scores.map((score, key) => (
          <View style={styles.hsrow}>
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

      <TouchableOpacity
        style={styles.hsappButtonContainer}
        onPress={() => {
          history.push('/');
        }}>
        <Text style={styles.appButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HighScore;
