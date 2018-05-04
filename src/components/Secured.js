import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { logout } from '../actions/AppAuth';
import RootNavigator from '../navigators/RootNavigator';
import { getPlaces } from '../actions/Places';
import { getUserVotes } from '../actions/Votes';

class Secured extends Component {
    
    componentDidMount() {
        this.props.getPlaces();
        this.props.getUserVotes();
    }

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        return (
            <View style={{flex:1}}>
                <RootNavigator />
            </View>
        );
    }
}

 
 
const mapStateToProps = (state, ownProps) => {
    return {
        email: state.AppAuth.email
    };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getPlaces,
        getUserVotes
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);