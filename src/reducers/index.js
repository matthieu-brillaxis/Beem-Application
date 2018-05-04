import { combineReducers } from 'redux';
import AppAuth from './AppAuth';
import Places from './Places'
import navTabState from './RootNavigator';
import navProfilState from './ProfilNavigator';
import Votes from './Votes';
import navUserListVotesState from './UserListVotesNavigator';
import navMapState from './MapNavigator';
 
const rootReducer = combineReducers({
    TabNav: navTabState,
    ProfilNav: navProfilState,
    UserListVotesNav: navUserListVotesState,
    MapNav: navMapState,
    AppAuth,
    Places,
    Votes
});
 
export default rootReducer;