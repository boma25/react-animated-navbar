import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import {Card} from 'react-native-elements';

export default class Last extends React.Component{
    render() {
        const navigation = this.props.navigation
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <Card title='Wallet' style={{ alignItems: 'center', justifyContent: 'center'}}>
              <View style={ {alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 10, }}>
                Welcome to the wallet
                </Text>
              </View>
            </Card>
          </View>
          );
    }
}