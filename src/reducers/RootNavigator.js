import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/RootNavigator';

export default function navTabState(state, action) {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
}