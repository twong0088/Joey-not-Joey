import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  //home page ============================
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#007aff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  // 1p====================================
  notches: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  text: {
    fontSize: 22,
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    flex: 1,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  // timer ====================================
  container: {
    justifyContent: 'center',
    flex: 0.5,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  remainingTime: {
    fontSize: 30,
  },
  // buttons====================================
  containerButtons: {
    flex: 4,
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  buttonStyle: {
    // flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    width: 150,
    // borderRadius: 5,
    margin: 15,
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  buttonImageIconStyle: {
    height: 150,
    width: 150,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  greyedOut: {
    height: 150,
    width: 150,
    borderRadius: 5,
    resizeMode: 'contain',
    opacity: 0.2,
  },
  buttonCouplet: {
    flexDirection: 'row',
  },
  // score =================================
  score: {
    fontSize: 20,
    margin: 15,
  },

  // Bottom bar styling ====================
  bottomBar: {
    flex: 1,
    justifyContent: 'space-evenly',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lifeLines: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  // gameOver ================================
  gameOverTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    margin: 15,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  gameOverSecondaryTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    margin: 15,
  },
  // highscore============================================
  hscontainer: {
    flex: 1,
  },
  hsheaderrow: {
    marginTop: 15,
    flexDirection: 'row',
    height: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  hsrow: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 10,
  },
  hscell: {
    width: 100,
    alignItems: 'center',
  },
  hstext: {
    fontSize: 18,
    textAlign: 'center',
  },
  hsappButtonContainer: {
    elevation: 8,
    backgroundColor: '#007aff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
});

export default styles;
