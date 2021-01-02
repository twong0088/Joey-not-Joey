
import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {View} from 'react-native';
import Home from './components/home.js';
import SinglePlayer from './components/singlePlayer.js';
import MultiplayerLanding from './components/multiPlayer.js';
import HighScore from './components/highScore.js';

const App = () => {
  return (
    <NativeRouter>
      <View style={{flex: 1}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/singleplayer" component={SinglePlayer} />
          <Route
            exact
            path="/multiplayerlanding"
            component={MultiplayerLanding}
          />
          {/* <Route exact path="/multiplayer" component={Multiplayer} /> */}
          <Route exact path="/highscore" component={HighScore} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

export default App;
