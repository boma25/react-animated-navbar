import * as React from 'react';
import { StyleSheet, Text, View, Animated, Easing,Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-elements';
import Last from './screens/Last';
import Feed from './screens/Feed';
import Details from './screens/Details';
import Messages from './screens/Messages';
import { Button } from 'react-native-paper';


let{height, width} = Dimensions.get('window')

export default class App extends React.Component{

    constructor() {
      super()
      this.state={
        fadeValue: new Animated.Value(0),
        see:false,
        leftPositionValue: new Animated.Value(width-30)
      }
    }
    fadeAnimation =() => {
      Animated.timing(this.state.fadeValue,{
        toValue:1,
        duration:2000
      }).start()
    }
    moveAnimationForword=()=>{
      Animated.timing(this.state.leftPositionValue,{
        toValue:0,
        duration:1000,
        easing: Easing.linear,
      }).start()
    }
    moveAnimationBackWard=()=>{
      Animated.timing(this.state.leftPositionValue,{
        toValue:width-30,
        duration:1000,
        easing: Easing.linear,
      }).start()
    }
    
    moveAnimation =()=>{
      if(this.state.see === false){
        this.moveAnimationForword()
        this.setState({see:true})
      }else{
        this.moveAnimationBackWard()
        this.setState({see:false})
      }
    }
  render() {
    const Tab = createMaterialBottomTabNavigator();
    return(
      <TouchableWithoutFeedback onPress={this.moveAnimation}>
        <View style={{ height:height}}>
          <NavigationContainer> 
          <Tab.Navigator
            activeColor="#141313"
            inactiveColor="#fdfbfb"
            labeled={false}
            barStyle={{ backgroundColor: '#2d2828', marginBottom:5, width:width, left:this.state.leftPositionValue}}
          >
            <Tab.Screen
              options={{
                tabBarLabel: 'Last',
                tabBarIcon: ({ color}) => (
                    <View style={{backgroundColor: ""}}>
                      <MaterialCommunityIcons name='wallet' color={color} size={26}/>
                    </View>
                ),
              }}
              name="Last" component={Last} />
            <Tab.Screen
              options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color }) => (
                  <View style={''}>
                    <MaterialCommunityIcons name='swap-horizontal-bold' color={color} size={26}/>
                  </View>
                ),
              }}
              name="Feed" component={Feed} />
              <Tab.Screen
              options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color }) => (
                  <View style={''}>
                    <MaterialCommunityIcons name='cash' color={color} size={26}/>
                  </View>
                ),
              }} 
              name="Details" component={Details} />
              <Tab.Screen
              options={{
                tabBarLabel: 'Messages',
                tabBarIcon: ({ color }) => (
                  <View style={''}>
                    <MaterialCommunityIcons name='dice-4' color={color} size={26}/>
                  </View>
                ),
              }} 
              name="Messages" component={Messages} />
          </Tab.Navigator>
        </NavigationContainer>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor:'#AB7F70',
    borderRadius: 25,
    height:35,
    width:35,
    alignItems: 'center',
    justifyContent: 'center',
  }
})