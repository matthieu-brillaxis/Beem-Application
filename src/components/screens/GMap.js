import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import LoadingScreen from '../elements/LoadingScreen';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class GMap extends Component {
    constructor (props) {
        super();
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            }
        );
    }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }
    

    render () {
        if(this.props.isLoading == true) {
            return (
                <LoadingScreen/>
            );
        } else {
            if(Object.keys(this.props.places).length){
                return (
                    <MapView
                        region={this.state.region}
                        provider={ PROVIDER_GOOGLE }
                        style={ styles.container }
                        showsUserLocation={ true }
                    >
                    {this.props.places.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={{latitude:marker.latitude, longitude: marker.longitude}}
                            navigation={this.props.navigation}
                            onPress={() =>
                                this.props.navigation.navigate('placeScreen', {item: marker, title: marker.name})
                            }
                        >
                            <Image source={require('../../assets/img/pointeurFichier1.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode="contain" 
                            />
                        </Marker>
                    ))}
                    <TouchableOpacity
                        style={styles.roundButton}
                    >
                            <Text style={styles.textButton}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </MapView>
                    
                );
            } else {
                return (
                    <MapView
                        provider={ PROVIDER_GOOGLE }
                        style={ styles.container }
                        showsUserLocation={ true }
                        region={ this.state.region }
                    >
                    </MapView>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    roundButton : {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 99,
        width:50,
        height:50,
        backgroundColor:'black',
        position:'absolute',
        right:30,
        bottom:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton : {
        // justifyContent: 'center',
        // flex:1,
        // alignItems: 'center',
        color:'white',
        fontSize:22,
        textAlign:'center',
    }
});

const mapStateToProps = (state, ownProps) => {
    return { 
        places: state.Places.places,
        isLoading: state.Places.isLoading,
    };
}
 
export default connect(mapStateToProps, null)(GMap);