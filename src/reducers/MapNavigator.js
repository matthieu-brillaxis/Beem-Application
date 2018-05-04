import { MapNavigator } from '../navigators/MapNavigator';
import { NavigationActions } from 'react-navigation';

export default function navMapState(state, action) {
    const nextState = MapNavigator.router.getStateForAction(action, state);
    return nextState || state;
}