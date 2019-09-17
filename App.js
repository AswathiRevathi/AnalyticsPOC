/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import ScreenOne from './android/src/ScreenOne';
import ScreenTwo from './android/src/ScreenTwo';

import { createStackNavigator } from 'react-navigation-stack'

import { createDrawerNavigator,  createAppContainer } from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';




const AppNavigator = createStackNavigator({
  ScreenOnes: { screen: ScreenOne },
 ScreenTwos: { screen: ScreenTwo }
});

export default createAppContainer(AppNavigator);




// let Analytics = firebase.analytics();

// export default class App extends Component{
//   constructor(props){
//     super(props);
//     Analytics.setAnalyticsCollectionEnabled(true);
//     Analytics.setUserId("123456");
//   }


  
// _click=()=>{
// alert("clickedd")
// }
//   render(){
//    Analytics.setCurrentScreen('HOME');

//     console.log("insise");
//     return(
//       <View style={{justifyContent:'center',alignItems:'center'}}>
// <Button title="Click" onPress={this._click}></Button>
//         <Text>HOME</Text>
//       </View>
//     );
//   }
// }