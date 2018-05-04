import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

class VoteScreen extends Component {
    constructor (props) {
        super();
    }

    static navigationOptions = ({ navigation }) => ({

        title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'find': navigation.state.params.title,
    });
 
    render () {
        console.log(this.props.navigation.state);
        return (
            <View>
                <Text>
                    {this.props.navigation.state.params.item.place.name}
                </Text>
                {/* <Text>
                    {item.description}
                </Text> */}
                <View>
                    <Text>
                        {this.props.navigation.state.params.item.place.adresse}
                    </Text>
                    <Text>
                    {this.props.navigation.state.params.item.place.ville}, {this.props.navigation.state.params.item.place.code_postal}
                    </Text>
                </View>
                <View>
                    <Text>
                        {`Du ${this.props.navigation.state.params.item.place.horaire_debut} au ${this.props.navigation.state.params.item.place.horaire_fin}`}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>
                            Top!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Flop!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    }
});

// const mapStateToProps = (state, ownProps) => {
//     return {
//         firstName: state.AppAuth.profile.firstName,
//         lastName: state.AppAuth.profile.lastName,
//     };
// }
 
export default connect(null, null)(VoteScreen);