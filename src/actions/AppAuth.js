import axios from 'axios';
import { API_URL } from './../config/config';
import { AsyncStorage } from 'react-native';
import store from '../store';

export const getToken = () => (dispatch) => {

    dispatch({
        type: 'GET_TOKEN_START'
    })
    
    AsyncStorage.getItem('token')
    .then(function (e) {
        axios.get(`${API_URL}/auth/me`, { 
            headers: { Authorization: `Bearer ${e}` } 
        })
        .then(function (response) {
            dispatch({
                type: 'GET_TOKEN_SUCCESS',
                token:e,
                id: response.data.id,
                email: response.data.email,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: 'GET_TOKEN_ERROR',
                error: error,
            })
        });
    })
    .catch(function(error){
        console.log(error);
    })
};

export const login = (email, password) => (dispatch) => {

    dispatch({
        type: 'LOGIN_START'
    })

    axios.post(`${API_URL}/auth/login`, {
        email: email,
        password: password
      })
      .then(function (response) {
        AsyncStorage.setItem('token', response.data.token)
        .then(function (e) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                token: response.data.token,
                id: response.data.profile.id,
                email: response.data.profile.email,
                firstName: response.data.profile.firstName,
                lastName: response.data.profile.lastName,
            })
        })
        .catch(function(error){
            console.log(error);
        })
      })
      .catch(function (error) {
          console.log(error);
        dispatch({
            type: 'LOGIN_ERROR',
            error: error,
        })
      });


};
 
export const logout = () => (dispatch) => {
    dispatch({
        type:'LOGOUT_START'
    })

    AsyncStorage.removeItem('token')
    .then(function(e) {
        dispatch({
            type:'LOGOUT_SUCCESS'
        })
    })
    .catch(function(error) {
        dispatch({
            type:'LOGOUT_ERROR',
            error:error,
        })
    })
};



export const updateProfil = (firstName, lastName, email) => (dispatch) => {
    dispatch({
        type:'UPDATE_PROFIL_START'
    })

    const { AppAuth: {profile :{ id } } } = store.getState();
    const { AppAuth: {profile :{ token } } } = store.getState();
    axios.post(`${API_URL}/users/edit`, {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "id": id 
    },
    {
        headers: { Authorization: `Bearer ${token}` } 
    })
    .then(function (response) {
        console.log(response.data.firstName);
            dispatch({
                type: 'UPDATE_PROFIL_SUCCESS',
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email
            })
      })
      .catch(function (error) {
            dispatch({
                type: 'UPDATE_PROFIL_ERROR',
                error: error,
            })
      });
};
 
export const signup = (username, password) => {
    return (dispatch) => {
    };
};