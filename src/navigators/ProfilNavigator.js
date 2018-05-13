import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import MyAccount from '../components/screens/profileScreens/MyAccount';
import MyRank from '../components/screens/profileScreens/MyRank';
import Profil from '../components/screens/Profil';

const stackScenes = {
    Profil: {
        screen:Profil,
        navigationOptions: {
            header: null,
            transitionConfig : () => ({
                transitionSpec: {
                    duration: 0,
                    timing: Animated.timing,
                    easing: Easing.step0,
                },
            }),
        },
    },
    MyAccount: {
        screen:MyAccount,
        navigationOptions: {
            headerMode: 'screen',
            headerTitle: 'Mon compte',
            mode: 'modal',
        },
    },
    MyRank: {
        screen:MyRank,
        navigationOptions: {
            headerMode: 'screen',
            headerTitle: 'Mon classement',
            mode: 'modal',
        },
    },
};

const stackOptions = {
    initialRouteName:'Profil',
    // headerMode: 'float',
    // mode: 'modal',
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

export const ProfilNavigator = StackNavigator(stackScenes, stackOptions);

const ProfilRouter = ({ dispatch, ProfilNav }) => (
  <ProfilNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: ProfilNav,
    })} />
);

ProfilRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ProfilNav: PropTypes.object.isRequired,
};

export default connect(state => ({
  ProfilNav: state.ProfilNav
}))(ProfilRouter);