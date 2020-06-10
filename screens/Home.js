import React from 'react';
import { View, Text, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Messages from './Messages';
import Details from './Details';
import Last from './Last';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component{
    render() {
        const Tab = createBottomTabNavigator()
        const navigation = this.props.navigation
        return (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Messages" component={Messages} />
                <Tab.Screen name="Details" component={Details} />
                <Tab.Screen name ="Last" component={Last}/>
            </Tab.Navigator>
          );
    }
}