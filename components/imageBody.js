import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

const ImageBody = props => {

    useEffect(() => {
        // console.log(props.source);
    });
    return (
        <View style={styles.container}>
            <Image source={{uri: props.source}}
                   style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        marginVertical: 20,
        borderRadius: 150,
        borderColor: 'gray',
        borderWidth: 5,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImageBody;