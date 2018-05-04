import { ProfilNavigator } from '../navigators/ProfilNavigator';
import { NavigationActions } from 'react-navigation';

export default function navProfilState(state, action) {
    const nextState = ProfilNavigator.router.getStateForAction(action, state);
    return nextState || state;
}