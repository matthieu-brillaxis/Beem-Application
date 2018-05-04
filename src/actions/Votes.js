import axios from 'axios';
import { API_URL } from './../config/config';
import store from '../store';

export const getUserVotes = () => (dispatch) => {

    dispatch({
        type: 'GET_MY_VOTES_START'
    })
    const { AppAuth: {profile :{ token } } } = store.getState();
    const { AppAuth: {profile :{ id } } } = store.getState();

    axios.get(`${API_URL}/votes/user/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(function (response) {
        dispatch({
            type: 'GET_MY_VOTES_SUCCESS',
            votes: response.data
        })
      })
      .catch(function (error) {
        dispatch({
            type: 'GET_MY_VOTES_ERROR',
            error: error,
        })
      });
};