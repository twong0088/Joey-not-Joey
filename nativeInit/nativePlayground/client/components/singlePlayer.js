/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, SafeAreaView, Image} from 'react-native';
import Timer from './timer.js';
import Buttons from './buttons.js';
import ProgressBar from './progress.js';
import LifeLines from './lifelines.js';
import Score from './score.js';
import DialogInput from 'react-native-dialog-input';
import dummyData from '../dummyData.js';
import styles from '../styles.js';
const axios = require('axios');

const singlePlayer = ({history}) => {
  const [counter, setCounter] = useState(1);
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [timer, resetTimer] = useState(0);
  const [randomIndex, reroll] = useState(Math.floor(Math.random() * 4));
  const [fifty, useFifty] = useState(false);
  const [addTime, useAddTime] = useState(false);
  const [skip, useSkip] = useState(false);
  const [disableHalf, disabledHalf] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [photo, setPhoto] = useState({});
  const [isDialogVisible, showDialog] = useState(true);
  const [playerName, setPlayerName] = useState('anonymous');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  // const [stopwatch, setStopWatch] = useState(0);
  // const [stopwatchOn, setStopwatchOn] = useState(false);

  const selectAnswer = correct => {
    if (correct) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const skipQuestion = () => {
    useSkip(true);
    reroll(Math.floor(Math.random() * 4));
    resetTimer(timer + 1);
    setQuestion(question + 1);
  };

  const nextQuestion = () => {
    if (counter >= 20) {
      // setStopwatchOn(false);
      setEndTime(new Date());
      setGameOver(true);
      if (score <= 12) {
        setPhoto({
          url: require('../../joeyImages/fail.jpg'),
          caption: 'You failed Joey',
        });
      } else if (score >= 13 && score < 17) {
        setPhoto({
          url: require('../../joeyImages/decent.jpg'),
          caption: 'You know Joey quite well',
        });
      } else if (score >= 17 && score <= 19) {
        setPhoto({
          url: require('../../joeyImages/aboveAverage.jpg'),
          caption: 'You are a Joey Expert',
        });
      } else {
        setPhoto({
          url: require('../../joeyImages/joeyMaster.jpg'),
          caption: 'You have a PhD in Joey-ology',
        });
      }
    }
    setCounter(counter + 1);
    setQuestion(question + 1);
    reroll(Math.floor(Math.random() * 4));
    resetTimer(timer + 1);
    disabledHalf(false);
  };

  const resetTime = () => {
    useAddTime(true);
    resetTimer(timer + 1);
  };

  const omitHalf = () => {
    disabledHalf(true);
    useFifty(true);
  };

  const addToDB = newScore => {
    axios
      .post('http://127.0.0.1:8000/api/newscore', newScore)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  return gameOver ? (
    <SafeAreaView style={styles.notches}>
      <Text style={styles.gameOverTitle}>Joey not Joey </Text>
      <Text style={styles.gameOverSecondaryTitle}>Game Over!</Text>
      <DialogInput
        isDialogVisible={isDialogVisible}
        title={'Game Over!'}
        message={'Please Enter Your Name:'}
        hintInput={'20 Characters Max'}
        textInputProps={{maxLength: 20}}
        submitInput={inputText => {
          setPlayerName(inputText);
          showDialog(false);

          const newScore = {
            name: inputText || playerName,
            score: score,
            time: Math.abs(endTime - startTime),
          };
          addToDB(newScore);
        }}
        closeDialog={() => {
          showDialog(false);
        }}
      />
      <Image source={photo.url} style={{width: 300, height: 300}} />
      <Text style={{fontSize: 24}}>{photo.caption}</Text>
      <Score styling={styles.score} score={score} counter={counter} />
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => {
          history.push('/');
        }}>
        <Text style={styles.appButtonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => {
          history.push('/highscore');
        }}>
        <Text style={styles.appButtonText}>View High Score</Text>
      </TouchableOpacity>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.notches}>
      <Text style={styles.title}>Joey not Joey</Text>
      <Timer
        overallStyle={styles.container}
        time={styles.remainingTime}
        reset={timer}
        timesUp={nextQuestion}
      />
      <Buttons
        containerButtons={styles.containerButtons}
        buttonCouplet={styles.buttonCouplet}
        button={styles.buttonStyle}
        buttonIcon={styles.buttonImageIconStyle}
        greyedOut={styles.greyedOut}
        images={dummyData[question - 1]}
        randomIndex={randomIndex}
        selectAnswer={selectAnswer}
        omitHalf={disableHalf}
      />
      <Score styling={styles.score} score={score} counter={counter} />
      <View style={styles.bottomBar}>
        <ProgressBar pBarStyling={styles.progressBar} progress={counter} />
        <LifeLines
          lifeLinesStyling={styles.lifeLines}
          reset={resetTime}
          skip={skipQuestion}
          omitHalf={omitHalf}
          lifeline1={fifty}
          lifeline2={addTime}
          lifeline3={skip}
        />
      </View>
    </SafeAreaView>
  );
};

export default singlePlayer;
