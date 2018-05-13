import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';


class placeScreen extends Component {
    constructor (props) {
        super();
    }

    static navigationOptions =  ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    render () {
        console.log(this.props.navigation.state.params);
        return (
            <View>
                <Text>
                    {this.props.navigation.state.params.item.name}
                </Text>
                <Text>
                    {this.props.navigation.state.params.item.description}
                </Text>
                <View>
                    <Text>
                        {this.props.navigation.state.params.item.adresse}
                    </Text>
                    <Text>
                        {this.props.navigation.state.params.item.ville}, {this.props.navigation.state.params.item.code_postal}
                    </Text>
                </View>
                <View>
                    <Text>
                        {`Du ${this.props.navigation.state.params.item.horaire_debut} au ${this.props.navigation.state.params.item.horaire_fin}`}
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

// const mapStateToProps = (state, ownProps) => {
//     return {
//         firstName: state.AppAuth.profile.firstName,
//         lastName: state.AppAuth.profile.lastName,
//     };
// }
 
export default connect(null, null)(placeScreen);