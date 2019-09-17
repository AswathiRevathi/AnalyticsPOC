import React, {Component} from 'react';
import {View,Text} from 'react-native';

import firebase from 'react-native-firebase';
let Analytics = firebase.analytics();
export default class ScreenTwo extends Component{
    constructor(props){
        super(props);
        Analytics.setAnalyticsCollectionEnabled(true);
        Analytics.setUserId("123456");
      }
    render(){
        Analytics.setCurrentScreen('ScreenTwo');

        return(
<View>
    <Text>
        ScreenTwo
    </Text>
</View>

        );
    }

}
