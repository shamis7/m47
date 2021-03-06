import React, { Component } from 'react';
import Player from './components/player';
import Bullet from './components/bullet';
import {getMovement, getDirection} from './utils/playerMovement'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PanResponder
} from 'react-native';

export default React.createClass({
  getInitialState() {
    return {
        projectiles: [],
        touch_x: null,
        touch_y: null,
        player_x: Dimensions.get('window').width / 3,
        player_y: Dimensions.get('window').height / 3,
        player_direction: 'NEUTRAL'
      }
  },

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.setState({
          touch_x: gestureState.x0,
          touch_y: gestureState.y0
        })
        this.state.projectiles.push({x: gestureState.x0, y: gestureState.y0})
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState({
          touch_x: gestureState.x0,
          touch_y: gestureState.y0
        })
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({
          touch_x: null,
          touch_y: null
        })
      }
    })
  },

  render() {
    return (
      <View style={styles.board} {...this.panResponder.panHandlers}>
        <Player x = {this.state.player_x} y = {this.state.player_y}/>
        {this.renderProjectiles()}
      </View>
    );
  },

  componentDidMount() {
    this.interval  = setInterval(this.update, 1000);
  },

  update() {
    let origin = {x: this.state.player_x, y: this.state.player_y};
    let direction = getDirection(this.state.touch_x, this.state.touch_y, origin);
    this.setState({direction: direction})
    let movement = getMovement(direction);
    this.setState({
      player_x: this.state.player_x + movement.dx,
      player_y: this.state.player_y + movement.dy
    });
  },

  renderProjectiles() {
    return this.state.projectiles.map((data, i) => {
      this.state.projectiles[i].x += 10
      this.state.projectiles[i].y += 10
      return <Bullet x = {data.x + 10} y = {data.y + 10}/>
    })
  }
})

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#0C0D0D'
  }
});
