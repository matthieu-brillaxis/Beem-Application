import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import Geocoder from 'react-native-geocoding';
import { postPlace } from '../../../actions/Places';
import LoadingScreen from '../../elements/LoadingScreen';



class formScreen extends Component {
    constructor (props) {
        super();
        this.state = {
            nom: null,
            description: null,
            adresse: null,
            ville: null,
            code_postal: null,
            longitutde: null,
            latitude: null,
            horaire_debut: null,
            horaire_fin: null,
        }
    }

    componentDidMount() {
        Geocoder.init('AIzaSyByuepOdFZy3GXH9TcjBMsYsdO1bEf2BA8');
    }

    postPlace(e) {
        console.log(e);
        Geocoder.from(this.state.adresse + ', ' + this.state.city + ' ' + this.state.code_postal)
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
        .catch(error => console.warn(error));
        e.preventDefault();
    }
    

    static navigationOptions =  ({ navigation }) => ({
        title: 'Ajout d\'un bon plan',
    });

    render () {
        if(this.props.isLoading == true) {
            return (
                <LoadingScreen/>
            );
        } else {
            return (
                <View style={ styles.container } >
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        onChangeText={(text) => this.setState({ nom: text })}
                        placeholder={'Nom'}
                    />
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        onChangeText={(text) => this.setState({ description: text })}
                        placeholder={'Description'}
                    />
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        onChangeText={(text) => this.setState({ adresse: text })}
                        placeholder={'Adresse'}
                    />
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        onChangeText={(text) => this.setState({ ville: text })}
                        placeholder={'Ville'}
                    />
                    <TextInput
                        style={styles.textInput}
                        multiline={false}
                        onChangeText={(text) => this.setState({ code_postal: text })}
                        placeholder={'Code postal'}
                    />

                    <TouchableOpacity onPress={(e) => 
                            this.postPlace(e)
                        }
                        style={styles.button}
                    >
                        <Text style={styles.text}>
                            Valider
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        paddingRight:20,
        paddingLeft:20,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    subtitle: {
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
        marginBottom:20,
    },
    desc : {
        fontSize:16,
        marginBottom:10,
    },
    buttonContainer: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    button: {
        padding:15,
        margin:10,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    active: {
        color:'#ffcf02',  
    },
    default: {
        color:'white',
    },
    text: {
        fontSize:16,
        marginBottom:10,
    },
});

const mapStateToProps = (state, ownProps) => {
    return { 
        isLoading: state.Votes.isLoading,
    };
}

// const mapDispatchToProps = (dispatch) => (
//     bindActionCreators({
//         updateVote,
//     }, dispatch)
// );
 
export default connect(mapStateToProps, null)(formScreen);