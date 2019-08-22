/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const stars = [
      100,
      100,
      100,
      100,
      100
    ]
    return (
      <View style={ [styles.container, { flexDirection: 'row' }] }>
        {
          stars.map(star => {
            return (
              <View>
                <Icon name="star" size={30} color="yellow" />
                <View style={ { backgroundColor: 'white', height: 30, width: 30, position: 'absolute', opacity: 0 } }>

                </View>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
