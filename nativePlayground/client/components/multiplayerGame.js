/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-undef */
import React from 'react';
// import {SafeAreaView, Text, View} from 'react-native';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Timer from './timer.js';
import Buttons from './buttons.js';
import ProgressBar from './progress.js';
import data from '../data.js';
import styles from '../styles.js';
const waitingImages = [
  require('../../joeyImages/waiting1.jpg'),
  require('../../joeyImages/waiting2.jpg'),
  require('../../joeyImages/waiting3.jpg'),
  require('../../joeyImages/waiting4.jpg'),
  require('../../joeyImages/waiting5.jpg'),
  require('../../joeyImages/waiting6.jpg'),
  require('../../joeyImages/waiting7.jpg'),
];

class MultiPlayerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      connected: false,
      isPlayerOne: props.isPlayerOne,
      playerOnesTurn: true,
      playerOneScore: 0,
      playerTwoScore: 0,
      received: {},
      counter: 0,
      question: 0,
      randomIndex: 0,
      photo: {},
      timer: 0,
      disabledHalf: false,
      pause: false,
      playerTwoCounter: 1,
    };
    this.chatSocket = new WebSocket(
      `ws://127.0.0.1:8000/ws/game/${props.gameCode}/`,
    );
    // this.socket.onopen = () => {
    //   this.setState({connected: true});
    // };
    // this.emit = this.emit.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    // this.chatSocket = this.chatSocket.bind(this);
  }

  // emit() {
  //   if (this.state.connected) {
  //     this.socket.send('It worked!');
  //     this.setState(prevState => ({open: !prevState.open}));
  //   }
  // }

  // componentDidMount() {
  //   this.socket.onopen = () =>
  //     this.socket.send(
  //       JSON.stringify({type: 'message', payload: 'Hello Mr. Server!'}),
  //     );
  //   this.socket.onmessage = ({data}) => console.log(data);
  // }

  // this.chatSocket = new WebSocket(
  //   `ws://127.0.0.1:8000/ws/game/${this.props.gameCode}/`,
  // );

  componentDidMount() {
    // const socketPath = `ws://127.0.0.1:8000/ws/game/${this.props.gameCode}/`;
    // const chatSocket = new WebSocket(socketPath);
    if (this.state.isPlayerOne) {
      this.chatSocket.onopen = () => {
        console.log('WebSocket Client Connected');
      };
    } else {
      this.chatSocket.onopen = () => {
        console.log('WebSocket Client Connected');
      };
    }

    this.chatSocket.onmessage = e => {
      var receivedData = JSON.parse(e.data);

      this.setState(
        {
          playerOneScore: receivedData.playerOneScore,
          playerTwoScore: receivedData.playerTwoScore,
          playerOnesTurn: receivedData.playerOnesTurn,
          playerTwoCounter: receivedData.playerTwoCounter,
          // counter: this.state.counter + 1,
          // question: this.state.question + 1,
          // randomIndex: Math.floor(Math.random() * 4),
        },
        () => {
          console.log(this.state.playerTwoCounter);
          if (this.state.playerTwoCounter >= 20) {
            this.props.gameOver({
              playerOneScore: this.state.playerOneScore,
              playerTwoScore: this.state.playerTwoScore,
            });
          }
        },
      );
    };

    this.chatSocket.onclose = e => {
      console.error('Chat socket closed unexpectedly');
    };

    //   document.querySelector('#changeTurns').onclick = e => {
    //     chatSocket.send(
    //       JSON.stringify({
    //         playerOneScore: this.state.playerOneScore,
    //         playerTwoScore: this.state.playerTwoScore,
    //         playerOnesTurn: !this.state.playerOnesTurn,
    //       }),
    //     );
    //   };
    // }
  }
  selectAnswer(correct) {
    if (correct && this.state.isPlayerOne) {
      this.setState({
        playerOneScore: this.state.playerOneScore + 1,
      });
    } else if (correct && !this.state.isPlayerOne) {
      this.setState({
        playerTwoScore: this.state.playerTwoScore + 1,
      });
    }
    this.nextQuestion();
  }

  nextQuestion() {
    // write a send for every 5 questions
    this.setState(
      {
        counter: this.state.counter + 1,
        question: this.state.question + 1,
        randomIndex: Math.floor(Math.random() * 4),
        timer: this.state.timer + 1,
      },
      () => {
        if (!this.state.isPlayerOne) {
          this.setState(
            {
              playerTwoCounter: this.state.playerTwoCounter + 1,
            },
            () => {
              if (this.state.counter % 5 === 0) {
                this.chatSocket.send(
                  JSON.stringify({
                    playerOneScore: this.state.playerOneScore,
                    playerTwoScore: this.state.playerTwoScore,
                    playerOnesTurn: !this.state.playerOnesTurn,
                    playerTwoCounter: this.state.playerTwoCounter,
                  }),
                );
              }
            },
          );
        } else {
          if (this.state.counter % 5 === 0) {
            this.chatSocket.send(
              JSON.stringify({
                playerOneScore: this.state.playerOneScore,
                playerTwoScore: this.state.playerTwoScore,
                playerOnesTurn: !this.state.playerOnesTurn,
                playerTwoCounter: this.state.playerTwoCounter,
              }),
            );
          }
        }
      },
    );
  }
  render() {
    if (
      (this.state.isPlayerOne && this.state.playerOnesTurn) ||
      (!this.state.isPlayerOne && !this.state.playerOnesTurn)
    ) {
      return (
        <SafeAreaView style={styles.notches}>
          <Text style={styles.title}>Joey not Joey</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{margin: 15, alignItems: 'center'}}>
              <Text style={styles.gameCodeText}>
                Player 1: {this.props.playerOne}
              </Text>
              <Text style={styles.gameCodeText}>
                {this.state.playerOneScore}
              </Text>
            </View>
            <View style={{margin: 15, alignItems: 'center'}}>
              <Text style={styles.gameCodeText}>
                Player 2: {this.props.playerTwo}
              </Text>
              <Text style={styles.gameCodeText}>
                {this.state.playerTwoScore}
              </Text>
            </View>
          </View>
          <Timer
            overallStyle={styles.container}
            time={styles.remainingTime}
            reset={this.state.timer}
            timesUp={this.nextQuestion}
          />
          <Buttons
            containerButtons={styles.containerButtons}
            buttonCouplet={styles.buttonCouplet}
            button={styles.buttonStyle}
            buttonIcon={styles.buttonImageIconStyle}
            greyedOut={styles.greyedOut}
            images={data[this.state.question]}
            randomIndex={this.state.randomIndex}
            selectAnswer={this.selectAnswer}
            omitHalf={this.state.disableHalf}
          />
          <View style={styles.bottomBar}>
            {this.state.counter === 21 ? (
              <ProgressBar
                pBarStyling={styles.progressBar}
                progress={this.state.counter}
              />
            ) : (
              <ProgressBar
                pBarStyling={styles.progressBar}
                progress={this.state.counter + 1}
              />
            )}
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.notches}>
          <Text style={styles.gameOverTitle}>Joey not Joey </Text>
          <Text style={styles.gameOverSecondaryTitle}>
            {this.state.isPlayerOne
              ? `Waiting for player two: ${
                  this.props.playerTwo
                } to complete turn`
              : `Waiting for player one: ${
                  this.props.playerOne
                } to complete turn`}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 15, alignItems: 'center'}}>
              <Text style={styles.gameCodeText}>
                Player 1: {this.props.playerOne}
              </Text>
              <Text style={styles.gameCodeText}>
                {this.state.playerOneScore}
              </Text>
            </View>
            <View style={{margin: 15, alignItems: 'center'}}>
              <Text style={styles.gameCodeText}>
                Player 2: {this.props.playerTwo}
              </Text>
              <Text style={styles.gameCodeText}>
                {this.state.playerTwoScore}
              </Text>
            </View>
          </View>
          <Image
            source={
              waitingImages[Math.floor(Math.random() * waitingImages.length)]
            }
          />
        </SafeAreaView>
      );
    }
  }
}

export default MultiPlayerGame;
