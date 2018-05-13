import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import VoteScreen from '../components/screens/votesScreens/VoteScreen';
import UserListVotesScreen from '../components/screens/UserListVotesScreen';

const stackScenes = {
    UserListVotes: {
        screen:UserListVotesScreen,
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
    VoteScreen: {
        screen:VoteScreen,
        navigationOptions: {
            headerMode: 'screen',
            mode: 'modal',
        },
    },
};

const stackOptions = {
    initialRouteName:'UserListVotes',
    mode:'modal',
    // headerMode: 'float',
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

export const UserListVotesNavigator = StackNavigator(stackScenes, stackOptions);

const UserListVotesRouter = ({ dispatch, UserListVotesNav }) => (
    <UserListVotesNavigator
    navigation={addNavigationHelpers({
        dispatch,
        state: UserListVotesNav,
    })} />
);

UserListVotesRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  UserListVotesNav: PropTypes.object.isRequired,
};

export default connect(state => ({
    UserListVotesNav: state.UserListVotesNav
}))(UserListVotesRouter);