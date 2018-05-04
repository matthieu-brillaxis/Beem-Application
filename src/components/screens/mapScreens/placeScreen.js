import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';


class placeScreen extends Component {
    constructor (props) {
        super();
        this.state = {
            item: this.props.navigation.state.params.item
        };
    }
 
    render () {
        console.log(this.props.navigation.state.params.item);
        return (
            <Text>
                Place
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
 
export default connect(null, null)(placeScreen);