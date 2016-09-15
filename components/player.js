import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native'

export default React.createClass({
  getInitialState() {
    return {
      }
  },

  componentWillMount() {

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
          <Image source={require('./tank.png')} />
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
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  }
});
