import React, {useContext, useReducer} from 'react'
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../types';

  const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

const [state, dispatch] = useReducer(authReducer, initialState);

      
      //Load user
      
      //Register user
       const register = async formData => {
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
          try {
              const res = await axios.post('/api/auth', formData, config);

              dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
              })
            } catch (err) {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: err.response.data.message
                })
            }
        }
        //login user
        
        //logout
        
        //clear errors

        
        
        return(
            <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register
            }}
         >
             {props.children}
         </AuthContext.Provider>
     )
  }

  export default AuthState