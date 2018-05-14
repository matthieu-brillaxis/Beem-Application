import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, StyleSheet, View } from 'react-native';

class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.loadingContainer}>
                <Image 
                source={require('../../assets/img/animlogo.gif')} 
                style={{
                    width:175,
                    height:175,
                }}/>
                <Text style={styles.text}>
                    Chargement
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    image: {
        width:175,
        height:175,
    },
    text: {
        marginTop:5,
        color:'black',
        fontWeight:'bold',
    }
});

export default connect(null, null)(LoadingScreen);