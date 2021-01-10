import React, { useState } from 'react';

import { 
    View, 
    Text,
    TextInput,
    Button, 
    StyleSheet ,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/card';
import Colors from '../constants/colors';
import Input from '../components/input';
import NumberContainer from '../components/numberContainer';
import Title from '../components/title';
import TextBody from '../components/textBody';

const StartGameScreen = props => {
    const  [enteredValue , setEnteredValue] =  useState('');
    const [confirmed, setConfirmedValue ] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const  enteredValueHandler = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }

    const resetEnteredValue = () => {
        setEnteredValue('');
        setConfirmedValue(false);
        setSelectedValue();
    }

    const confirmedEnteredValue =  () => {
        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber) || 
           chooseNumber <= 0 || 
           chooseNumber > 99){
            Alert.alert(
                'Invalid Number',
                'A Number has to be number b/w 0 to 99',
                [{
                    text: 'Okay',
                    onPress: resetEnteredValue,
                    style: 'destructive'
                }]
            );
            return;
        }
        setConfirmedValue(true);
        setSelectedValue(chooseNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmOutput;
    if(confirmed) {
        confirmOutput = <Card style={styles.summaryContainer}>
                            <TextBody> Choose Number</TextBody>
                            <NumberContainer>
                                {selectedValue}
                            </NumberContainer>
                            <Button title="START GAME"  onPress={() => props.onStartGame(selectedValue)} />
                        </Card>;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Title>Start New Game!</Title>
                <Card style={styles.inputContainer}>
                    <TextBody style={styles.subtitle}>
                        Select A Number
                    </TextBody>
                    <Input  placeholder="enter a number"
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={2}
                            value={enteredValue}
                            onChangeText={enteredValueHandler}
                            style={styles.input} />
                    <View style={styles.buttonContainer}>
                        {/* reset */}
                        <View style={styles.button}>
                            <Button title="RESET" 
                                    color={Colors.accent}
                                    onPress={resetEnteredValue} />
                        </View>
                        {/* confirm */}
                        <View style={styles.button}>
                        <Button title="CONFIRM" 
                                color={Colors.primary}
                                onPress={confirmedEnteredValue}
                                onpress={ () => {} } />
                        </View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    subtitle: {

    },
    input: {
        width: '60%',
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;