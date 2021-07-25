import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';

const App: () => React$Node = () => {
  const [header, setHeader] = useState('Gussing a number'); 
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const onNewGameHandler = () => {
      setUserNumber(null);
      setGuessRounds(0);
  }

  const startGameHandler =  (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onGameOverHandler = round => {
    setGuessRounds(round);
  }

  let content = <StartGameScreen onStartGame = {startGameHandler} />;
  if(userNumber && guessRounds <= 0) {
    content =  <GameScreen userChoice={userNumber} onGameOver={onGameOverHandler} />;
  } else if(guessRounds > 0){
    content = <GameOverScreen numberOfRounds={guessRounds} 
                              userValue={userNumber} 
                              onRestart={onNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title={header} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
 screen: {
   flex:1
 }
});

export default App;
