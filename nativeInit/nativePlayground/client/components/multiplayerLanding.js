import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity, View} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import styles from '../styles.js';
const joeyImage = require('../../joeyImages/multiplayerLanding.jpg');

const MultiplayerLanding = ({history}) => {
  const [page, changePage] = useState('landing');
  const [isNameDialogVisible, showNameDialog] = useState(true);
  const [isRoomDialogVisible, showRoomDialog] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [playerName, setPlayerName] = useState('anonymous');

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
                changePage('game');
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
            if (inputText === '123') {
              setInvalidCode(true);
            } else {
              changePage('game');
            }
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
  } else if (page === 'landingAfterName') {
    return (
      <SafeAreaView style={styles.notches}>
        <Text style={styles.title}>Joey not Joey</Text>
        <Image source={joeyImage} style={{flex: 5}} />
        <View>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text
              style={styles.appButtonText}
              onPress={() => {
                changePage('game');
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
              if (inputText === '123') {
                setInvalidCode(true);
              } else {
                changePage('game');
              }
            }}
            closeDialog={() => {
              showRoomDialog(false);
            }}
          />
        </View>
      </SafeAreaView>
    );
  } else if (page === 'game') {
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
