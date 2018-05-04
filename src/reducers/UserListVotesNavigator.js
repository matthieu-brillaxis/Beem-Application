import { UserListVotesNavigator } from '../navigators/UserListVotesNavigator';
import { NavigationActions } from 'react-navigation';

export default function navUserListVotesState(state, action) {
    const nextState = UserListVotesNavigator.router.getStateForAction(action, state);
    return nextState || state;
}