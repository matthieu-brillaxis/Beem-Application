import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ProfilButton from '../elements/ProfilButton';
import LogoutButton from '../elements/LogoutButton';
import ProfilNavigator from '../../navigators/ProfilNavigator';
import { logout } from '../../actions/AppAuth';

class Profil extends Component {
    constructor (props) {
        super();
    }

    static navigationOptions = ({ navigation }) => ({
        transitionSpec: {
            duration: 0,
            timing: Animated.timing,
            easing: Easing.step0,
        },
    });
 
    render () {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white',
            }}>
                <Image 
                source={require('../../assets/img/animlogo.gif')} 
                style={{
                    width:175,
                    height:175,
                }}/>
                <Text style={{
                    fontSize: 30,
                    marginBottom:20,
                }}>
                    {`${this.props.firstName} ${this.props.lastName}`}
                </Text>
                <ProfilButton onpress={'MyAccount'}
                    label={'Informations du compte'}
                    navigation={this.props.navigation}
                />
                <ProfilButton onpress={'MyRank'}
                    label={'Mon Classement'}
                    navigation={this.props.navigation}
                />
                {/* <ProfilButton onpress={''}
                    label={'Paramètres'}
                /> */}
                <LogoutButton onpress={this.props.logout}
                    label={'Déconnexion'}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        firstName: state.AppAuth.profile.firstName,
        lastName: state.AppAuth.profile.lastName,
    };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        logout,
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(Profil);