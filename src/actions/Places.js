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

export const postPlace = (nom, description, adresse, ville, code_postal, latitude, longitude, horaire_debut, horaire_fin) => (dispatch) => {
    dispatch({
        type:'POST_PLACE_START'
    })

    const { AppAuth: {profile :{ id } } } = store.getState();
    const { AppAuth: {profile :{ token } } } = store.getState();
    axios.post(`${API_URL}/places`, {
        "name": nom,
        "description": description,
        "adresse": adresse,
        "ville": ville,
        "code_postal": code_postal,
        "latitude": latitude,
        "longitude": longitude,
        "horaire_debut": horaire_debut,
        "horaire_fin": horaire_fin
    },
    {
        headers: { Authorization: `Bearer ${token}` } 
    })
    .then(function (response) {
            dispatch(getPlaces())
      })
      .catch(function (error) {
            dispatch({
                type: 'POST_PLACE_ERROR',
                error: error,
            })
      });
};