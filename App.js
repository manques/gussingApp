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


const App: () => React$Node = () => {
  const [header, setHeader] = useState('Gussing a number'); 
  return (
    <View style={styles.screen}>
      <Header title={header} />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
 screen: {
   flex:1
 }
});

export default App;
