import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions
} from 'react-native'

export default React.createClass({
  getInitialState() {
    return {

      }
  },

  componentDidMount() {

  },

  render() {
    return (
      <View
        style = {[styles.container,
          {
            left: this.props.x,
            top: this.props.y
          }]}>
        <View style={styles.tile}>
          <Text>
          B
          </Text>
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#0C0D0D',
  },
  tile: {
    width: 20,
    height: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  }
});
