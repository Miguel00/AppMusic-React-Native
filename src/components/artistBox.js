/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const myIcon = (<Icon name="rocket" size={30} color="#900" />)


type Props = {};
export default class ArtistBox extends Component<Props> {

  render() {
    const { imguri, likes, comments, name } = this.props.artist.item
    return (
      <View style={styles.artistBox}>
        <Image
          style = {styles.image}
          source = {{uri: imguri}}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContaner}>
              <Icon name="ios-heart-outline" size={36} color="grey"/>
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContaner}>
              <Icon name="ios-chatboxes-outline" size={36} color="grey"/>
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  image: {
    width: 150,
    height: 150,
  },
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .9,
    shadowOffset: {
        height: 1, 
        width: -2,
    },
    elevation: 9,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15
  },
  iconContaner: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray',
  }

});
