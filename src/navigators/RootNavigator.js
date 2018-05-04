import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import UserListVotesNavigator from './UserListVotesNavigator';
import MapNavigator from './MapNavigator';
import ProfilRouter from './ProfilNavigator';
import Research from '../components/screens/Research';

const tabScenes = {
  List: { 
    screen: UserListVotesNavigator,
    navigationOptions: {
      tabBarLabel: 'Mes choix'
    },
  },
  GMap: { 
    screen: MapNavigator,
    navigationOptions: {
      tabBarLabel: 'Carte'
    },
  },
  Profil: { 
    screen: ProfilRouter,
    navigationOptions: {
      tabBarLabel: 'Profil'
    },
  },
  Research: { 
    screen: Research,
    navigationOptions: {
      tabBarLabel: 'Rechercher'
    },
  },
};

const tabOptions = {
  initialRouteName: 'GMap',
  lazy: false,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#1a1a1a',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: 'black',
    },
  },
};

export const RootNavigator = TabNavigator(tabScenes, tabOptions);

const TabRouter = ({ dispatch, TabNav }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: TabNav,
    })} />
);

TabRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  TabNav: PropTypes.object.isRequired,
};

export default connect(state => ({
  TabNav: state.TabNav
}))(TabRouter);