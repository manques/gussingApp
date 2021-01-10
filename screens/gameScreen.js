import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View,Text, Button, Alert } from 'react-native';

import NumberContainer from '../components/numberContainer';
import Card from '../components/card';
import Title from '../components/title';
import TextBody from '../components/textBody';


const generateNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log('min', min);
    console.log('max', max);
    const rnd = Math.random();
    // console.log('rnd',rnd);
    // console.log(max-min);
    const rndNum = Math.floor(rnd * (max - min)) + min;
    console.log('rnd',rndNum);
    console.log('exclude', exclude);
    if(rndNum == exclude){
        return generateNumberBetween(min, max, exclude);
    } else{
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateNumberBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == props.userChoice){
            props.onGameOver(rounds);
        }
    }, [currentGuess, props.userChoice, props.onGameOver]);

    const nextGuessHandler = direction => {
        console.log('direction', direction);
        console.log('currentGuess', currentGuess);
        console.log(props.userChoice);
        if((direction == 'lower' && currentGuess < props.userChoice) 
           || (direction == 'high' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 
                         'You know this is wrong ...',
                         [{
                             text: 'Sorry!',
                             style: 'cancel',

                         }]);
            return;
        }


        if(direction == 'lower') {
            console.log('llll');
            currentHigh.current = currentGuess;
            console.log(currentHigh.current);
            console.log('llll');
        } else {
            console.log('hhh');
            currentLow.current = currentGuess;
            console.log(currentLow.current);
            console.log('hhh');
        }
        const nextNumber = generateNumberBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(round => round + 1);
    }
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'high')} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;