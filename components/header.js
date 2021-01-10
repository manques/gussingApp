import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
}

import Colors from '../constants/colors';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700'
    }
});

export default Header;