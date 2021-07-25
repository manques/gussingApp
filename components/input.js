import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}
        placeholderTextColor='#000' />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '60%',
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // height: 30,
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
        // color: 'white'
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20
    }
});

export default Input;