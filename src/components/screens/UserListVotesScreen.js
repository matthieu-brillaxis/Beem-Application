import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, TextInput, View, Button, AsyncStorage, FlatList, ListItem, Dimensions, StyleSheet } from 'react-native';
import LoadingScreen from '../elements/LoadingScreen';
import VoteListItem from '../elements/VoteListItem';

class UserListVotesScreen extends Component {
    constructor (props) {
        super();
    }
    
    render () {
        if(this.props.isLoading == true) {
            return (
                <LoadingScreen />
            );
        }
        else {
            if(Object.keys(this.props.votes).length){
                return (
                    <View style={ styles.listContainer }>
                                <FlatList
                                    data={this.props.votes}
                                    style={styles.list}
                                    numColumns={1}
                                    keyExtractor={item => item.place_id.toString()}
                                    renderItem={({ item }) => (
                                        <VoteListItem 
                                            item={item}
                                            navigation={this.props.navigation}
                                        />
                                    )}
                                />
                    </View>
                );
            } else {
                return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{fontSize: 27}}>
                                {`Bonjour ${this.props.username}`}
                            </Text>
                            <Text style={{fontSize: 22}}>
                                Votre liste de lieu est encore vide..
                            </Text>
                        </View>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop:20
    },
    list: {
        flex:1,
    }
});

const mapStateToProps = (state, ownProps) => {
    return { 
        votes: state.Votes.votes,
        isLoading: state.Votes.isLoading,
        username: state.AppAuth.profile.firstName,
    };
}
 
export default connect(mapStateToProps, null)(UserListVotesScreen);