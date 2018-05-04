import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';

class VoteListItem extends Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() =>
                    this.props.navigation.navigate('VoteScreen', {item: this.props.item, title:this.props.item.place.name})
                }
                activeOpacity={0.7}
                style={styles.item}
            >
                <Text style={styles.text}>
                    {this.props.item.place.name}
                </Text>
                <Text>
                    {
                        this.props.item.value == 1 ?
                        'top' :
                        'flop'
                    }
                </Text>
                <Text>
                    {this.props.item.place.horaire_debut} - {this.props.item.place.horaire_fin}
                </Text>
            </TouchableOpacity>                
        )
    }
}

const {height, width} = Dimensions.get('window');
const itemHeight = height / 8;

const styles = StyleSheet.create({
    text: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    item: {
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        flex:1,
        borderBottomWidth:1,
        borderColor: 'black',
        borderStyle:'solid',
        height: itemHeight,
    }
});

export default connect(null, null)(VoteListItem);