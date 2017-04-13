/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloWorld_4_4_2 extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>
                    HELLO WORLD
                </Text>
                <Text style={styles.blabla}>
                    Blablablabla
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000'
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
        color: '#B34426'
    },
    blabla: {
        textAlign: 'center',
        marginBottom: 5,
        color: '#123EEE',
        backgroundColor: '#5c5858'
    }
});

AppRegistry.registerComponent('HelloWorld_4_4_2', () => HelloWorld_4_4_2);
