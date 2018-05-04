import axios from 'axios';
import { API_URL } from './../config/config';
import store from '../store';

export const getPlaces = () => (dispatch) => {

    dispatch({
        type: 'GET_ALL_PLACES_START'
    })
    const { AppAuth: {profile :{ token } } } = store.getState();
    
    axios.get(`${API_URL}/places`, { headers: { Authorization: `Bearer ${token}` } })
      .then(function (response) {
        dispatch({
            type: 'GET_ALL_PLACES_SUCCESS',
            places: response.data
        })
      })
      .catch(function (error) {
        dispatch({
            type: 'GET_ALL_PLACES_ERROR',
            error: error,
        })
      });
};