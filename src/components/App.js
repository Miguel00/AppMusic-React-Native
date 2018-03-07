/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ArtistBox from './artistBox';
import ArtistList from './ArtistList';
import { getArtists } from './api-client';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    getArtists()
      .then(data => console.warn('en app', data))
  } 
  render() {

    const artist = {
      imguri: 'http://cashboxmagazine.com/wp-content/uploads/2018/01/the_beatles.jpg',
      name: 'Beatles',
      likes: 200,
      comments: 150,
    }
    const artists = Array(300).fill( artist )

    return (
        <ArtistList artists={artists}/>
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
