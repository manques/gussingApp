import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';
import TextBody from '../components/textBody';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <TextBody>
                {props.children}
            </TextBody>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.accent,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        textAlign: 'center',
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;