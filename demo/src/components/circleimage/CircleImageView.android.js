import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class CircleImageView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source = {this.props.imageUrl} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 40,
    height: 40
  }
});