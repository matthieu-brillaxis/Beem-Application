import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
 
class Research extends Component {
    constructor (props) {
        super();
    }
 
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 27}}>Research</Text>
            </View>
        );
    }
}
 
export default Research;