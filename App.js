/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './artistBox';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const myIcon = (<Icon name="rocket" size={30} color="#900" />)


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    const artist = {
      imguri: 'http://cashboxmagazine.com/wp-content/uploads/2018/01/the_beatles.jpg',
      name: 'Beatles',
      likes: 200,
      comments: 150,
    }
    const artists = Array(500).fill( artist )
    this.state = {
      artists // --- ES6
    }
  }

  render() {
    return (
      <FlatList
        data       = { this.state.artists }
        renderItem = { artist => <ArtistBox artist = {artist} /> }
      />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },

});
