import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Secured from './Secured';
import { AsyncStorage } from 'react-native';
import store from '../store';
import { getToken } from '../actions/AppAuth';
import { bindActionCreators } from 'redux';
import LoadingScreen from './elements/LoadingScreen';

class LoginPage extends Component {

    componentWillMount() {
        this.props.getToken();
    }

    render() {
        if(this.props.isLoading){
            return (
                <LoadingScreen/>
            );
        } else {
            if (this.props.isLoggedIn) {
                return (
                    <Secured />
                );
            } else {
                return (
                    <Login />
                );
            } 
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.AppAuth.isLoggedIn,
        isLoading: state.AppAuth.isLoading,
    };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getToken,
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);