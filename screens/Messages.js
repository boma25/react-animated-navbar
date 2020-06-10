import React from 'react';
import { View, Text, Button } from 'react-native';
import {Card} from 'react-native-elements';

export default class Messages extends React.Component{
    render() {
        const navigation = this.props.navigation
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
          <Card title='Last' style={{ alignItems: 'center', justifyContent: 'center'}}>
            <View style={ {alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{marginBottom: 10, }}>
                welcome to the Last screen
              </Text>
            </View>
          </Card>
      </View>
          );
    }
}