import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { login } from '../actions/AppAuth';
import { store } from '../store';
 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            email: '',
            password: '',
        };
    }
 
    userLogin (e) {
        this.props.login(this.state.email, this.state.password);
        e.preventDefault();
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={{padding: 20}} store={store}>
                <Text style={{fontSize: 27}}>{this.state.route}</Text>
                <TextInput 
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.email} 
                    onChangeText={(text) => this.setState({ email: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
                <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.AppAuth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        login,
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);