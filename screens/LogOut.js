import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from 'firebase';
export default class LogOut extends Component {
  componentDidMount(){
    firebase.auth().signOut()
  }
  render() {
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Text>Log Out</Text>
      </View>
    );
  }
}
    