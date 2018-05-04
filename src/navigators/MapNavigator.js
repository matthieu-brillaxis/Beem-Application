import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import placeScreen from '../components/screens/mapScreens/placeScreen';
import GMap from '../components/screens/GMap';

const stackScenes = {
    GMap: {
        screen:GMap,
        navigationOptions: {
            header: null,
        },
    },
    placeScreen: {
        screen:placeScreen,
        navigationOptions: {
            headerMode: 'screen',
            mode: 'modal',
        },
    },
};

const stackOptions = {
    initialRouteName:'GMap',
    // navigationOptions: {
    //     gesturesEnabled: false,
    // },
    // transitionConfig: () => ({
    //     transitionSpec: {
    //         duration: 300,
    //         easing: Easing.out(Easing.poly(4)),
    //         timing: Animated.timing,
    //     },
    //     screenInterpolator: sceneProps => {
    //         const { layout, position, scene } = sceneProps;
    //         const { index } = scene;

    //         const height = layout.initHeight;
    //         const translateY = position.interpolate({
    //             inputRange: [index - 1, index, index + 1],
    //             outputRange: [height, 0, 0],
    //         });

    //         const opacity = position.interpolate({
    //             inputRange: [index - 1, index - 0.99, index],
    //             outputRange: [0, 1, 1],
    //         });

    //         return { opacity, transform: [{ translateY }] };
    //     },
    // }),
};

export const MapNavigator = StackNavigator(stackScenes, stackOptions);

const MapRouter = ({ dispatch, MapNav }) => (
    <MapNavigator
    navigation={addNavigationHelpers({
        dispatch,
        state: MapNav,
    })} />
);

MapRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  MapNav: PropTypes.object.isRequired,
};

export default connect(state => ({
    MapNav: state.MapNav
}))(MapRouter);