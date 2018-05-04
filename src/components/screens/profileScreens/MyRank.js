import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';


class MyRank extends Component {
    constructor (props) {
        super();
    }
 
    render () {
        return (
            <Text>
                MyRank
            </Text>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         firstName: state.AppAuth.profile.firstName,
//         lastName: state.AppAuth.profile.lastName,
//     };
// }
 
export default connect(null, null)(MyRank);