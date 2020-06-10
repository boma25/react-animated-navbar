import React from 'react';
import { View, Text, Button } from 'react-native';
import {Card} from 'react-native-elements';

export default class Feed extends React.Component{
    render() {
        const navigation = this.props.navigation
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <Card title='Transaction' style={{ alignItems: 'center', justifyContent: 'center'}}>
              <View style={ {alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 10, }}>
                  welcome to the transaction screen
                </Text>
              </View>
            </Card>
        </View>
          );
    }
}