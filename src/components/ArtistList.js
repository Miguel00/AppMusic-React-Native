/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './artistBox';
import {
  StyleSheet,
  FlatList,
  View
} from 'react-native';


type Props = {};
export default class ArtistList extends Component<Props> {
  constructor(props) {
    super(props);
    const artists = props.artists
    this.state = {
      artists
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data       = { this.state.artists }
                renderItem = { artist => <ArtistBox artist = {artist} /> }
            />
        </View>
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
