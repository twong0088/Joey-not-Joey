import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity, View} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import styles from '../styles.js';
const joeyImage = require('../../joeyImages/multiplayerLanding.jpg');
const axios = require('axios');

const MultiplayerLanding = ({history}) => {
  const [page, changePage] = useState('landing');
  const [isNameDialogVisible, showNameDialog] = useState(true);
  const [isRoomDialogVisible, showRoomDialog] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [playerName, setPlayerName] = useState('anonymous');
  const [gameCode, setGameCode] = useState('');

  if (page === 'landing') {
    return (
      <SafeAreaView style={styles.notches}>
        <Text style={styles.title}>Joey not Joey</Text>
        <Image source={joeyImage} style={{flex: 5}} />
        <View>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text
              style={styles.appButtonText}
              onPress={() => {
                axios
                  .post('http://127.0.0.1:8000/api/newroom', {
                    playerOne: playerName,
                  })
                  .then(response => {
                    console.log(response.data.code);
                    setGameCode(response.data.code);
                  })
                  .catch(err => {
                    console.log(err);
                  });
                changePage('code');
              }}>
              Create Room
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => {
              showRoomDialog(true);
            }}>
            <Text style={styles.appButtonText}>Join Room</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => {
              history.push('/');
            }}>
            <Text style={styles.appButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <DialogInput
          isDialogVisible={isRoomDialogVisible}
          title={'Join Game'}
          message={
            invalidCode
              ? 'Please Enter Valid Game Room Code'
              : 'Please Enter Game Room Code'
          }
          hintInput={'20 Characters Max'}
          // textInputProps={{maxLength: 20}}
          submitText={'Join Room!'}
          submitInput={inputText => {
            console.log(inputText);
            axios
              .patch(`http://127.0.0.1:8000/api/checkroom/${inputText + '/'}`, {
                playerTwo: playerName,
              })
              .then(response => {
                setGameCode(inputText);
                changePage('code');
              })
              .catch(err => {
                console.log(err);
                setInvalidCode(true);
              });
          }}
          closeDialog={() => {
            showRoomDialog(false);
          }}
        />
        <DialogInput
          isDialogVisible={isNameDialogVisible}
          title={'Enter Name'}
          message={'Please Enter Your Name'}
          hintInput={'20 Characters Max'}
          // textInputProps={{maxLength: 20}}
          submitInput={inputText => {
            setPlayerName(inputText);
            showNameDialog(false);
          }}
          closeDialog={() => {
            showNameDialog(false);
          }}
        />
      </SafeAreaView>
    );
  } else if (page === 'code') {
    return (
      <SafeAreaView style={styles.notches}>
        <Text style={styles.title}>Joey not Joey</Text>
        <Image source={joeyImage} style={{flex: 5}} />
        <View style={{height: 50}}>
          <Text style={styles.gameCodeText}>Room Code: {gameCode}</Text>
          <Text style={styles.gameCodeText}>Playing as: {playerName}</Text>
        </View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            console.log('start');
          }}>
          <Text style={styles.appButtonText}>Start Game!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else if (page === 'gameOver') {
    return (
      <SafeAreaView style={styles.notches}>
        <Text style={styles.title}>Joey not Joey</Text>
        <Image source={joeyImage} style={{flex: 5}} />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            history.push('/');
          }}>
          <Text style={styles.appButtonText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

export default MultiplayerLanding;
