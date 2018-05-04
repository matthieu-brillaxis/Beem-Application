import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class PostButton extends Component {
    render() {

        return (
            <TouchableOpacity onPress={this.props.pressed}
                style={styles.button}
            >
                <Text style={styles.text}>
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
    },
    text: {
        color:'black',
        fontWeight: 'bold',
        textAlign:'center'
    }
});

export default connect(null, null)(PostButton);