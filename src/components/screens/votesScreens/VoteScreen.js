import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { updateVote } from '../../../actions/Votes';
import LoadingScreen from '../../elements/LoadingScreen';

class VoteScreen extends Component {
    constructor (props) {
        super();
        this.state = {
            value: null,
            positiveVote: null,
            negativeVote: null,
        }
    }

    static navigationOptions =  ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    voteUpdate(e,value,vote) {
        this.props.updateVote(this.props.navigation.state.params.item.id ,this.props.navigation.state.params.item.place_id, value);
        this.setState({ value: value })
        if(vote == 1 && this.state.negativeVote > 0) {
            this.setState({ positiveVote : this.state.positiveVote +1, negativeVote: this.state.negativeVote - 1 });
        } else if( vote == 1 && this.state.negativeVote == 0){
            this.setState({ positiveVote : this.state.positiveVote +1});
        } else if ( vote == -1 && this.state.positiveVote > 0) {
            this.setState({ negativeVote : this.state.negativeVote +1, positiveVote: this.state.positiveVote - 1 });
        } else if ( vote == -1 && this.state.positiveVote == 0) {
            this.setState({ negativeVote : this.state.negativeVote +1});
        }
        e.preventDefault();
    }
    componentDidMount() {
        this.setState({value:this.props.navigation.state.params.item.value});
        this.setState({positiveVote: this.props.navigation.state.params.item.place.positiveVotes});
        this.setState({negativeVote: this.props.navigation.state.params.item.place.negativeVotes});
    }
 
    render () {
        if(this.props.isLoading == true) {
            return (
                <LoadingScreen/>
            );
        } else {
            console.log(this.props.navigation.state.params.item);
            return (
                <View style={ styles.container } >
                    <Text style={ styles.subtitle}>
                        Information
                    </Text>
                    <Text style= { styles.desc} >
                        {this.props.navigation.state.params.item.place.description}
                    </Text>
                    <View style = {styles.voteContainer}>
                        <Text style= {styles.text }>
                            Top : {this.state.positiveVote}
                        </Text>
                        <Text style= {styles.text }>
                            Flop : {this.state.negativeVote}
                        </Text>
                    </View>

                    <Text style={ styles.subtitle}>
                        Lieux
                    </Text>
                    <Text style= {styles.text }>
                        {this.props.navigation.state.params.item.place.adresse}, {this.props.navigation.state.params.item.place.code_postal} {this.props.navigation.state.params.item.place.ville}
                    </Text>

                    <Text style={ styles.subtitle}>
                        Date
                    </Text>
                    <Text style= {styles.text }>
                        {`Du ${this.props.navigation.state.params.item.place.horaire_debut} au ${this.props.navigation.state.params.item.place.horaire_fin}`}
                    </Text>

                    <View style = { styles.buttonContainer }>
                        <TouchableOpacity onPress={(e) => 
                            this.voteUpdate(e,1,1)
                        }
                        style= { styles.button  }>
                            <Text style= {this.state.value == 1? styles.active : styles.default}>
                                Top!
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(e) => 
                            this.voteUpdate(e,0,-1)
                        }
                        style= { styles.button }>
                            <Text style= {this.state.value == 0? styles.active : styles.default}>
                                Flop!
                            </Text>
                        </TouchableOpacity>
                    </View>
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

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateVote,
    }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(VoteScreen);