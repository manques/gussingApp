import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';

const Title = props => {
    return (
        <Text style={styles.text}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.primary,
        paddingVertical: 20
    }
});

export default Title;
