import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import firebase from 'react-native-firebase';
let Analytics = firebase.analytics();

export default class ScreenOne extends Component{
    constructor(props){
        super(props);
        Analytics.setAnalyticsCollectionEnabled(true);
        Analytics.setUserId("123456");
      }
    
_onClickButton=(a,b)=>{
   Analytics.logEvent('onPressBlueButton', { target: b });

    alert(a)

}
_toScreenTwo=()=>{
    Analytics.logEvent('onPressNavigateButton');
    this.props.navigation.navigate('ScreenTwos')

}

    render(){
        Analytics.setCurrentScreen('ScreenOne');

        return(
<View>
    <Text>ScreenOne</Text>
    <View style={{margin:10}}>
    <Button  style={{margin:10}} title="Test Now"  onPress={()=>this._onClickButton("1","2")}></Button>
    </View>
    <Button onPress={this._toScreenTwo} title="TO List ->"/>

   
  
</View>

        );
    }

}
