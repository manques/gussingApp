import React from 'react';
import {  StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const TextBody = props => {
    return(
        <Text style={styles.text}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.accent
    }
});

export default TextBody;