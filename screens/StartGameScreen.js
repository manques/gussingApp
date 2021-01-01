import React from 'react';

import { 
    View, 
    Text,
    TextInput,
    Button, 
    StyleSheet 
} from 'react-native';

import Card from '../components/card';
import Colors from '../constants/colors';
import Input from '../components/input';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.subtitle}>
                    Select A Number
                </Text>
                <Input placeholder="enter a number"
                       blurOnSubmit
                       autoCapitalize='none'
                       autoCorrect={false}
                       keyboardType="number-pad"
                       maxLength={2}
                       style={styles.input} />
                <View style={styles.buttonContainer}>
                    {/* reset */}
                    <View style={styles.button}>
                        <Button title="RESET" 
                                color={Colors.accent}
                                onPress={ () => {}} />
                    </View>
                    {/* confirm */}
                    <View style={styles.button}>
                      <Button title="CONFIRM" 
                              color={Colors.primary}
                              onpress={ () => {} } />
                    </View>
                </View>
            </Card>
        </View>
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
    }
});

export default StartGameScreen;