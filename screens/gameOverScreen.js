import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Title from '../components/title';
import TextBody from '../components/textBody';
import ImageBody from '../components/imageBody';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Title>The Game is Over!</Title>
            <ImageBody source='https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg'/>
            <TextBody>Number of rounds: {props.numberOfRounds}</TextBody>
            <TextBody>User Number: {props.userValue}</TextBody>
            <View style={styles.buttonContainer}>
                <Button title="RESTART GAME" 
                        onPress={props.onRestart}
                        style={styles.button} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonContainer: {
        marginVertical: 10
    }
});

export default GameOverScreen;