import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { updateProfil } from '../../../actions/AppAuth';

class MyAccount extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            email:this.props.email,
        }
    }

    userUpdate(e) {
        this.props.updateProfil(this.state.firstName, this.state.lastName, this.state.email);
        e.preventDefault();
    }
 
    render () {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Informations personelles</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    onChangeText={(text) => this.setState({ firstName: text })}
                    value={this.props.firstName}
                    placeholder={'Prénom'}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    onChangeText={(text) => this.setState({ lastName: text })}
                    value={this.props.lastName}
                    placeholder={'Nom'}
                />
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.props.email}
                    placeholder={'Adresse mail'}
                />
                <TouchableOpacity onPress={(e) => 
                        this.userUpdate(e)
                    }
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        Valider
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text}>Changer de mot passe</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    placeholder={'Nouveau mot de passe'}
                />
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    textInput : {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        height:40,
        borderColor:'black',
        borderBottomWidth:1,
        textAlign:'center',
        width: width - 60,
    },
    view: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
    },
    text : {
        color:'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        padding:15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        width:100,
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        firstName: state.AppAuth.profile.firstName,
        lastName: state.AppAuth.profile.lastName,
        email: state.AppAuth.profile.email,
    };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateProfil,
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);